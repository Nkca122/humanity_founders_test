"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { RefreshCcw, SendHorizontal } from "lucide-react";
import { useState } from "react";

interface Chat {
  message: string;
  time: Date;
  by: "user" | "agent";
}

export default function Agent() {
  const [chat, setChat] = useState<Chat[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Chat = {
      message: input,
      time: new Date(),
      by: "user",
    };

    setChat((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const agentMessage: Chat = {
        message: data.response,
        time: new Date(),
        by: "agent",
      };
      setChat((prev) => [...prev, agentMessage]);
    } catch (err) {
      console.error("Error talking to Gemini:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-background flex flex-col justify-start items-center rounded-2xl">
      <div className="flex justify-between items-center px-10 py-6 border-b w-full">
        <div className="flex justify-center gap-2 items-center">
          <Image
            src="/assets/ai_agent.png"
            width={20}
            height={20}
            alt=""
            className="border rounded-full"
          />
          <h3 className="font-semibold text-lg">AI Agent</h3>
        </div>
        <Button
          variant={"ghost"}
          className="text-muted-foreground text-sm flex justify-center gap-2 items-center"
          onClick={() => setChat([])}
        >
          Refresh <RefreshCcw size={16} />
        </Button>
      </div>

      <div className="flex flex-col w-full h-full relative overflow-y-auto p-4 gap-2">
        {chat.map((c, i) => (
          <div
            key={i}
            className={`max-w-[70%] p-3 rounded-xl ${
              c.by === "user"
                ? "ml-auto bg-blue-100 text-right"
                : "mr-auto bg-gray-100 text-left"
            }`}
          >
            <p className="text-sm">{c.message}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {c.time.toLocaleTimeString()}
            </p>
          </div>
        ))}
        {loading && (
          <div className="text-muted-foreground text-sm italic">Thinking...</div>
        )}
        <div className="absolute bottom-4 w-[80%] left-[10%] flex justify-around items-center gap-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="rounded-none bg-muted border-t-muted-foreground"
            placeholder="Ask me anything..."
          />
          <Button
            variant={"ghost"}
            className="h-full aspect-square rounded-full border"
            disabled={loading}
          >
            <SendHorizontal className="h-full w-full" stroke="blue" />
          </Button>
        </div>
      </div>
    </div>
  );
}

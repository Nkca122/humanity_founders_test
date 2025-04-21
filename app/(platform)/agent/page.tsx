"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { RefreshCcw, SendHorizontal, Edit } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Chat {
  message: string;
  time: Date;
  by: "user" | "agent" | "error";
}

export default function Agent() {
  const [chat, setChat] = useState<Chat[]>([
    {
      message: "Welcome Back, Kadin! How can I help you today?",
      time: new Date(),
      by: "agent",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom when chat updates or loading state changes
  useEffect(() => {
    scrollToBottom();
  }, [chat, loading]);

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
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch from the agent.");
      }
      const data = await res.json();
      const agentMessage: Chat = {
        message: data.response,
        time: new Date(),
        by: "agent",
      };
      setChat((prev) => [...prev, agentMessage]);
    } catch (err) {
      console.error("Error talking to agent:", err);
      const errorMessage: Chat = {
        message: "Sorry, something went wrong while talking to the agent.",
        time: new Date(),
        by: "error",
      };
      setChat((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setChat([
      {
        message: "Welcome Back, Kadin! How can I help you today?",
        time: new Date(),
        by: "agent",
      },
    ]);
  };

  return (
    <div className="h-full bg-background dark:bg-gray-900 flex flex-col rounded-2xl overflow-hidden border dark:border-gray-800">
      <div className="flex justify-between items-center px-4 py-4 border-b dark:border-gray-800 w-full bg-white dark:bg-gray-900">
        <div className="flex justify-center gap-2 items-center">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
            <Image
              src="/assets/ai_agent.png"
              width={24}
              height={24}
              alt="AI"
              className="rounded-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/24";
              }}
            />
          </div>
          <h3 className="font-medium text-sm dark:text-gray-200">AI Agent</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground dark:text-gray-400 text-xs flex justify-center gap-1 items-center h-8"
          onClick={handleReset}
        >
          Reset <RefreshCcw size={14} />
        </Button>
      </div>

      <div className="flex-1 w-full overflow-y-auto p-4 space-y-6 bg-gray-50 dark:bg-gray-900">
        {chat.map((c, i) => (
          <div key={i} className="flex flex-col">
            {c.by === "agent" && (
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 dark:text-blue-300 text-xs flex-shrink-0 mt-1">
                  <Image
                    src="/assets/ai_agent.png"
                    width={24}
                    height={24}
                    alt="AI"
                    className="rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/24";
                    }}
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm max-w-[85%] text-sm dark:text-gray-200">
                  {c.message}
                </div>
              </div>
            )}

            {c.by === "user" && (
              <div className="flex items-start justify-end space-x-2">
                <div className="bg-blue-50 dark:bg-blue-900/50 rounded-lg p-3 shadow-sm max-w-[85%] text-sm dark:text-gray-200">
                  {c.message}
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image
                    src="/assets/Photo.png"
                    width={24}
                    height={24}
                    alt="User Avatar"
                    className="rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/24";
                    }}
                  />
                </div>
              </div>
            )}

            {c.by === "error" && (
              <div className="flex justify-center">
                <div className="bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-lg p-3 max-w-[85%] text-sm">
                  {c.message}
                </div>
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 dark:text-blue-300 text-xs flex-shrink-0 mt-1">
              <Image
                src="/assets/ai_agent.png"
                width={24}
                height={24}
                alt="AI"
                className="rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/24";
                }}
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
              <div className="flex space-x-1 items-center">
                <div
                  className="w-2 h-2 bg-blue-300 dark:bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-300 dark:bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: "100ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-300 dark:bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: "200ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* This empty div is used as a reference to scroll to the bottom */}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="rounded-full bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-visible:ring-blue-500 dark:text-gray-200"
            placeholder="Ask me anything..."
            disabled={loading}
          />
          <Button
            variant="ghost"
            className="h-10 w-10 rounded-full flex items-center justify-center border-none"
            disabled={loading}
            onClick={handleSend}
          >
            <SendHorizontal className="h-5 w-5 text-blue-500 dark:text-blue-400" />
          </Button>
        </div>

        <div className="flex justify-between mt-2 px-2">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Quick Links
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-xs h-7 rounded-full flex items-center gap-1 bg-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-700"
            >
              <RefreshCcw
                size={12}
                className="text-blue-500 dark:text-blue-400"
              />{" "}
              New referral
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs h-7 rounded-full flex items-center gap-1 bg-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-700"
            >
              <Edit size={12} className="text-blue-500 dark:text-blue-400" />{" "}
              Create campaign
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

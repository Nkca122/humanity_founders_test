import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const metadata: Metadata = {
  title: "Referral Hub | Credentials",
  description: "Register your account with referral hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <div className="fixed bottom-4 right-4 w-fit z-50">
        <Popover>
          <PopoverTrigger>
            <Badge variant={"default"} className="bg-background rounded-full aspect-square shadow-sm"><Image src="/logos/Chatbot.png" height={30} width={30} alt=""/></Badge>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <div className="min-h-32 aspect-video">
              <div className="h-full w-full flex flex-col">
                <div className="border-b">
                    <div className="px-2 py-3 flex gap-2 justify-start items-center">
                        <Image src="/logos/Chatbot-open.png" width={28} height={28} alt=""/>
                        <h1 className="font-bold">AI Assistant</h1>
                    </div>
                </div>
                <div className="h-full w-full flex place-content-center place-items-center">
                  <h2 className="text-sm font-semibold">Coming Soon</h2>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

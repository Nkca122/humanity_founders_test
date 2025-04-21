"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
export default function Setup() {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-full flex place-items-center place-content-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-muted-foreground">Setup content will go here</p>
          <Button
            className="bg-gradient-to-r from-[#305AFFCC] to-[#B5D2FF] w-full rounded-[7px]"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Continue to Dashboard
          </Button>
        </div>
      </div>
    </>
  );
}

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Path and button config
const pathDetails: Record<
  string,
  { title: string; icon: string }
> = {
  "/setup": { title: "Platform Setup", icon: "/assets/page_setup.png" },
  "/agent": { title: "AI Agent", icon: "/assets/ai_agent.png" },
  "/dashboard": { title: "Dashboard", icon: "/assets/dashboard.png" },
  "/campaign": { title: "Campaign", icon: "/assets/campaign.png" },
  "/promoters": { title: "Promoter", icon: "/assets/promoters.png" },
  "/leads": { title: "Leads", icon: "/assets/leads.png" },
  "/payouts": { title: "Payouts", icon: "/assets/payouts.png" },
};

export default function PlatFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const activePath = Object.keys(pathDetails).find((path) =>
    pathname.startsWith(path)
  );
  const currentTitle = activePath ? pathDetails[activePath].title : "Platform";

  return (
    <div className="w-full h-full flex justify-center items-center relative overflow-x-hidden overflow-y-scroll">
      {/* Sidebar */}
      <div className="flex flex-col justify-start items-start h-full bg-background [padding:0px_16px_0px_0px] w-[246px] border-r-1 border-r-muted-accent-foreground pt-[123px]">
        {Object.entries(pathDetails).map(([path, { title, icon }]) => {
          const isActive = pathname.startsWith(path);

          // Only show "setup" button if we are on /setup
          if (path === "/setup" && pathname !== "/setup") return null;

          return (
            <Link href={path} key={path} className="w-full">
              <Button
                variant="default"
                className={`w-full flex justify-start items-center shadow-none border-l-4 rounded-l-none ${
                  isActive
                    ? "text-[#305AFF] border-[#305AFF] bg-[rgba(48,90,255,0.1)] hover:bg-[rgba(48,90,255,0.1)]"
                    : "text-[#305AFF] border-transparent bg-transparent hover:bg-transparent"
                }`}
              >
                <Image src={icon} alt={`${title} icon`} width={16} height={16} className="mr-2" />
                <h3>{title}</h3>
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="w-full h-full flex flex-col items-center justify-start">
        <div className="bg-background px-16 py-5 flex w-full justify-between border-b border-b-muted-accent-foreground">
          <h3 className="text-xl">{currentTitle}</h3>
          <div className="flex justify-center items-center gap-4">
            <div>
              <Image
                src="/assets/notifications.png"
                width={24}
                height={24}
                alt="Notifications"
              />
            </div>
            <div className="flex justify-center items-center gap-1">
              <Avatar className="w-[30px] aspect-square">
                <AvatarImage src="/assets/Photo.png" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center items-center gap-0.5">
                <p className="text-md font-semibold w-full text-left leading-none">
                  Kadin Station
                </p>
                <p className="text-muted-foreground text-xs leading-none">
                  kadinstation@gamil.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Children Rendered Here */}
        <div className="w-full h-full px-3 py-3">{children}</div>
      </div>
    </div>
  );
}

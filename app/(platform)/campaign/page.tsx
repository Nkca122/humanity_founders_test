import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Dot } from "lucide-react";

export default function Campaign() {
  return (
    <>
      <div className="h-full w-full overflow-y-scroll bg-background px-3 py-3">
        <Tabs defaultValue="past_promoters" className="w-[400px]">
          <TabsList className="bg-background">
            <TabsTrigger value="past_promoters" className="bg-muted text-muted-foreground dark:data-[state=active]:bg-[#305AFF1A] data-[state=active]:bg-[#305AFF1A] data-[state=active]:text-[#305AFF]  rounded-none w-[250px] h-[45px]">Past Promoters</TabsTrigger>
            <TabsTrigger value="new_promoters" className="bg-muted text-muted-foreground dark:data-[state=active]:bg-[#305AFF1A] data-[state=active]:bg-[#305AFF1A] data-[state=active]:text-[#305AFF] rounded-none w-[250px] h-[45px]">New Promoters</TabsTrigger>
            <TabsTrigger value="new_leads" className="bg-muted text-muted-foreground dark:data-[state=active]:bg-[#305AFF1A] data-[state=active]:bg-[#305AFF1A] data-[state=active]:text-[#305AFF] rounded-none w-[250px] h-[45px]">New Leads</TabsTrigger>
          </TabsList>
          <TabsContent value="past_promoters">
            <div className="w-full h-full px-3 py-3">
                <Button className="bg-gradient-to-r from-[#305AFFCC] to-[#B5D2FF] w-full rounded-[7px]">
                    <Plus />
                    <p>Create New Campaign</p>
                </Button>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="flex justify-center items-center gap-2">
                    <Badge variant={"outline"} className="text-[#305AFF]">
                        2 campaigns
                    </Badge>
                    <Badge variant={"outline"} className="text-[#305AFF]">
                        <Dot size={64} strokeWidth={16} />
                        1 Active
                    </Badge>
                </div>
            </div>
          </TabsContent>
          <TabsContent value="new_promoters">Change your password here.</TabsContent>
          <TabsContent value="new_leads">Change your password there.</TabsContent>
        </Tabs>
      </div>
    </>
  );
}

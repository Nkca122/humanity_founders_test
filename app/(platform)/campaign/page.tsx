import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Dot,
  Trash2,
  Eye,
  LightbulbIcon,
  Edit,
  Clock,
  MessageSquare,
  Mail,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Campaign() {
  return (
    <>
      <div className="h-full w-full overflow-y-scroll bg-background dark:bg-gray-900 px-3 py-3 rounded-2xl">
        <Tabs defaultValue="past_promoters" className="w-full">
          <TabsList className="bg-background dark:bg-gray-900">
            <TabsTrigger
              value="past_promoters"
              className="bg-muted text-muted-foreground dark:bg-gray-800 dark:text-gray-400 dark:data-[state=active]:bg-[#305AFF1A] data-[state=active]:bg-[#305AFF1A] data-[state=active]:text-[#305AFF] dark:data-[state=active]:text-[#305AFF] rounded-none w-[250px] h-[45px]"
            >
              Past Promoters
            </TabsTrigger>
            <TabsTrigger
              value="new_promoters"
              className="bg-muted text-muted-foreground dark:bg-gray-800 dark:text-gray-400 dark:data-[state=active]:bg-[#305AFF1A] data-[state=active]:bg-[#305AFF1A] data-[state=active]:text-[#305AFF] dark:data-[state=active]:text-[#305AFF] rounded-none w-[250px] h-[45px]"
            >
              New Promoters
            </TabsTrigger>
            <TabsTrigger
              value="new_leads"
              className="bg-muted text-muted-foreground dark:bg-gray-800 dark:text-gray-400 dark:data-[state=active]:bg-[#305AFF1A] data-[state=active]:bg-[#305AFF1A] data-[state=active]:text-[#305AFF] dark:data-[state=active]:text-[#305AFF] rounded-none w-[250px] h-[45px]"
            >
              New Leads
            </TabsTrigger>
          </TabsList>
          <TabsContent value="past_promoters">
            <div className="flex justify-end items-center mb-6 mt-4">
              <div className="flex space-x-4">
                <div className="relative w-64">
                  <input
                    type="text"
                    placeholder="Search campaigns..."
                    className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2 dark:border-gray-700 dark:text-gray-200">
                  Filter
                </Button>
              </div>
            </div>
            <div className="w-full mb-6">
              <Button className="bg-gradient-to-r from-[#305AFFCC] to-[#B5D2FF] text-white rounded-md px-4 py-2">
                <Plus className="mr-2" size={18} />
                Create New Campaign
              </Button>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-4 mb-6">
              <div className="flex justify-center items-center gap-2">
                <Badge variant="outline" className="text-[#305AFF] dark:border-gray-700">
                  2 Campaigns
                </Badge>
                <Badge
                  variant="outline"
                  className="text-[#305AFF] flex items-center dark:border-gray-700"
                >
                  <Dot className="text-[#305AFF]" size={24} />1 Active
                </Badge>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Summer Referral Program Card */}
              <Card className="w-96 shadow-sm border dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg dark:text-gray-200">
                      Summer Referral Program
                    </CardTitle>
                    <Badge className="bg-blue-500 text-white">Active</Badge>
                  </div>
                  <CardDescription className="dark:text-gray-400">5/31/2024 - 8/30/2024</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Referrals</span>
                      <span className="text-2xl font-semibold dark:text-gray-200">245</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Conversion</span>
                      <span className="text-2xl font-semibold dark:text-gray-200">32%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 dark:text-gray-400">ROI</span>
                      <span className="text-2xl font-semibold dark:text-gray-200">287%</span>
                    </div>
                  </div>
                  <div className="bg-[#E8F1FF] dark:bg-blue-900/20 p-3 rounded-md">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="inline-flex items-center mr-1">
                        <LightbulbIcon size={16} className="text-blue-500" />
                      </span>
                      Increase reward by 10% to boost conversion rates during
                      peak season
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button variant="ghost" size="icon" className="dark:text-gray-400 dark:hover:bg-gray-700">
                    <Trash2 size={18} className="text-gray-500 dark:text-red-400" color="red" />
                  </Button>
                  <Button variant="ghost" size="icon" className="dark:text-gray-400 dark:hover:bg-gray-700">
                    <Eye size={18} className="text-gray-500 dark:text-gray-400" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Early Bird Special Card */}
              <Card className="w-96 shadow-sm border dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg dark:text-gray-200">
                      Early Bird Special
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600"
                    >
                      Inactive
                    </Badge>
                  </div>
                  <CardDescription className="dark:text-gray-400">8/20/2024 - 9/19/2024</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Referrals</span>
                      <span className="text-2xl font-semibold dark:text-gray-200">300</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Conversion</span>
                      <span className="text-2xl font-semibold dark:text-gray-200">40%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 dark:text-gray-400">ROI</span>
                      <span className="text-2xl font-semibold dark:text-gray-200">320%</span>
                    </div>
                  </div>
                  <div className="bg-[#E8F1FF] dark:bg-blue-900/20 p-3 rounded-md">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="inline-flex items-center mr-1">
                        <LightbulbIcon size={16} className="text-blue-500" />
                      </span>
                      Extend your campaign! Strong engagement suggests higher
                      conversions with more time.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button variant="ghost" size="icon" className="dark:text-gray-400 dark:hover:bg-gray-700">
                    <Trash2 size={18} className="text-gray-500 dark:text-red-400" color="red" />
                  </Button>
                  <Button variant="ghost" size="icon" className="dark:text-gray-400 dark:hover:bg-gray-700">
                    <Eye size={18} className="text-gray-500 dark:text-gray-400" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="new_promoters">
            <div className="flex items-center justify-center h-32">
              <p className="text-gray-500 dark:text-gray-400">
                New Promoters content will appear here
              </p>
            </div>
          </TabsContent>
          <TabsContent value="new_leads">
            <div className="flex flex-col justify-start items-start w-full h-full">
              <div className="w-full font-semibold text-lg border-b dark:border-gray-700 mt-4 mb-4">
                <h3 className="px-4 dark:text-gray-200">Leads Settings</h3>
              </div>
              <div className="px-6 py-8 bg-[#F4F6FD] dark:bg-gray-800 w-full flex flex-col justify-start items-start rounded-lg border border-blue-100 dark:border-gray-700">
                <div className="mb-6 flex items-center">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    Follow-Up Strategy<span className="text-red-500">*</span>
                  </h4>
                </div>

                {/* SMS - First Step */}
                <div className="w-full flex flex-col items-center">
                  <div className="w-full max-w-md mb-1 flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <MessageSquare size={18} className="text-green-600 dark:text-green-400" />
                      </div>
                      <span className="font-medium dark:text-gray-200">SMS</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:text-gray-400 dark:hover:bg-gray-800">
                        <Edit size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:hover:bg-gray-800">
                        <Trash2 size={16} className="text-red-500 dark:text-red-400" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-8 border-l border-gray-300 dark:border-gray-700"></div>

                  {/* Wait 5 days */}
                  <div className="w-full max-w-md mb-1 flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <Clock size={18} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="font-medium dark:text-gray-200">Wait: 5 days</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:text-gray-400 dark:hover:bg-gray-800">
                        <Edit size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:hover:bg-gray-800">
                        <Trash2 size={16} className="text-red-500 dark:text-red-400" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-8 border-l border-gray-300 dark:border-gray-700"></div>

                  {/* Email */}
                  <div className="w-full max-w-md mb-1 flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                        <Mail size={18} className="text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="font-medium dark:text-gray-200">Email</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:text-gray-400 dark:hover:bg-gray-800">
                        <Edit size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:hover:bg-gray-800">
                        <Trash2 size={16} className="text-red-500 dark:text-red-400" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-8 border-l border-gray-300 dark:border-gray-700"></div>

                  {/* Wait 2 days */}
                  <div className="w-full max-w-md mb-1 flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <Clock size={18} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="font-medium dark:text-gray-200">Wait: 2 days</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:text-gray-400 dark:hover:bg-gray-800">
                        <Edit size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:hover:bg-gray-800">
                        <Trash2 size={16} className="text-red-500 dark:text-red-400" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-8 border-l border-gray-300 dark:border-gray-700"></div>

                  {/* SMS - Second */}
                  <div className="w-full max-w-md mb-1 flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <MessageSquare size={18} className="text-green-600 dark:text-green-400" />
                      </div>
                      <span className="font-medium dark:text-gray-200">SMS</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:text-gray-400 dark:hover:bg-gray-800">
                        <Edit size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:hover:bg-gray-800">
                        <Trash2 size={16} className="text-red-500 dark:text-red-400" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-8 border-l border-gray-300 dark:border-gray-700"></div>

                  {/* Wait 3 days */}
                  <div className="w-full max-w-md mb-1 flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <Clock size={18} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="font-medium dark:text-gray-200">Wait: 3 days</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:text-gray-400 dark:hover:bg-gray-800">
                        <Edit size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:hover:bg-gray-800">
                        <Trash2 size={16} className="text-red-500 dark:text-red-400" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-8 border-l border-gray-300 dark:border-gray-700"></div>

                  {/* SMS - Final */}
                  <div className="w-full max-w-md mb-1 flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <MessageSquare size={18} className="text-green-600 dark:text-green-400" />
                      </div>
                      <span className="font-medium dark:text-gray-200">SMS</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:text-gray-400 dark:hover:bg-gray-800">
                        <Edit size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 dark:hover:bg-gray-800">
                        <Trash2 size={16} className="text-red-500 dark:text-red-400" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Label,
  Pie,
  PieChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { TrendingDown, TrendingUp, Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function StatCard({
  img,
  title,
  stat,
  delta,
}: {
  img: string;
  title: string;
  stat: number;
  delta?: number;
}) {
  return (
    <div className="flex justify-center items-center gap-1 w-full h-[72px] px-4">
      <div className="h-full w-fit flex flex-col justify-start items-center">
        <Avatar className="w-[50px] h-[50px]">
          <AvatarImage src={img} />
        </Avatar>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-center">
        <div className="flex flex-col mb-2 px-2">
          <h3 className="text-sm text-muted-foreground leading-none">
            {title}
          </h3>
          <p className="text-lg font-semibold leading-none">
            {stat.toLocaleString()}
          </p>
        </div>

        {delta && (
          <div className="flex w-full justify-between items-center">
            <Badge
              variant={"outline"}
              className={`flex justify-center items-center gap-2 ${
                delta > 0
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              } `}
            >
              {delta}%{delta > 0 ? <TrendingUp /> : <TrendingDown />}
            </Badge>
            <p className="text-xs text-muted-foreground">via last month</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ChartCard({
  title,
  activeColor,
  inactiveColor,
  percentage,
}: {
  title: string;
  activeColor: string;
  inactiveColor: string;
  percentage: number;
}) {
  const pieData = [
    { name: title, value: percentage, fill: activeColor },
    { name: `Not ${title}`, value: 100 - percentage, fill: inactiveColor },
  ];

  const chartConfig: ChartConfig = {
    [title]: { label: title, color: activeColor },
    [`Not ${title}`]: { label: `Not ${title}`, color: inactiveColor },
  };

  return (
    <>
      <Card className="flex flex-col h-[260px] items-center rounded-2xl shadow-none border-none w-full bg-background">
        <CardHeader className="w-full flex flex-col items-center justify-center pb-0">
          <CardTitle className="text-center text-muted-foreground flex gap-2 items-center text-sm">
            <p className="leading-none">{title}</p>
            <Info size={16} />
          </CardTitle>
        </CardHeader>

        <CardContent className="h-[200px] flex items-center justify-center pb-0 w-full">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[200px] w-full"
          >
            <PieChart width={200} height={200}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                innerRadius={65}
                cornerRadius={4}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className={`fill-foreground text-3xl font-bold text-[${activeColor}]`}
                          >
                            {percentage}%
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
}

export default function Dashboard() {
  const piechartConfig: ChartConfig = {
    referrals: {
      label: "Referrals sent",
      color: "red",
    },
    converted: {
      label: "Converted",
      color: "blue",
    },
  };

  const piechartData = [
    { name: "referrals", value: 57, fill: "#305AFFCC" },
    { name: "converted", value: 43, fill: "#EDEAFC" },
  ];

  const linechartData = [
    { name: "month", month: "January", value: 10 },
    { name: "month", month: "February", value: 20 },
    { name: "month", month: "March", value: 15 },
    { name: "month", month: "April", value: 40 },
    { name: "month", month: "May", value: 100 },
  ];

  const linechartConfig: ChartConfig = {
    month: {
      label: "Performance",
      color: "#305AFF",
    },
  };

  return (
    <>
      <div className="h-full w-full">
        <div className="flex justify-start items-center gap-0 w-full bg-background h-[112px] mb-4 rounded-2xl overflow-hidden">
          <StatCard
            img="/assets/promoter_stat.png"
            title="Total Promoters"
            stat={1234}
            delta={12}
          />
          <Separator orientation="vertical" />
          <StatCard
            img="/assets/conversion.png"
            title="Conversion rate"
            stat={23.5}
            delta={-2.4}
          />
          <Separator orientation="vertical" />
          <StatCard
            img="/assets/revenue_stat.png"
            title="Revenue Generated"
            stat={12345}
            delta={8.7}
          />
          <Separator orientation="vertical" />
          <StatCard
            img="/assets/campaign_stat.png"
            title="Active Campaigns"
            stat={2}
          />
        </div>

        <div className="flex w-full gap-4 mb-4">
          <ChartCard
            title="Repeat Refferal Rate"
            percentage={42}
            activeColor="#28C76F"
            inactiveColor="#AFFFD3"
          />
          <ChartCard
            title="Referral Engagement Rate"
            percentage={67}
            activeColor="#F98272"
            inactiveColor="#FFCAC3"
          />
          <ChartCard
            title="Churn Rate of Leads"
            percentage={28}
            activeColor="#4B91FF"
            inactiveColor="#C4DBFF"
          />
          <ChartCard
            title="Upsell Rate of Leads"
            percentage={19}
            activeColor="#B113C0"
            inactiveColor="#F9BFFF"
          />
        </div>

        <div className="flex w-full gap-2 mb-4">
          <div className="flex-2 bg-background pr-8 py-6 flex flex-col rounded-2xl">
            <div className="w-full flex justify-between items-center">
              <h3 className="w-full px-8 my-4 font-semibold">
                Promoter Performance over time
              </h3>
              <Select>
                <SelectTrigger className="w-[180px] rounded-none">
                  <SelectValue placeholder="Last 6 Months" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Yearly</SelectItem>
                  <SelectItem value="dark">Bi Annualy</SelectItem>
                  <SelectItem value="system">Quarterly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ChartContainer config={linechartConfig} className="p-2">
              <LineChart
                accessibilityLayer
                data={linechartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray={"3 3"}
                  stroke="#e5e7eb"
                />
                <YAxis
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={true}
                  content={
                    <ChartTooltipContent className="bg-[#979797] w-fit flex gap-2" />
                  }
                  formatter={(value) => `🟦 ${value}%`}
                />
                <Line
                  dataKey="value"
                  type="natural"
                  stroke="#305AFF"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </div>
          <div className="flex-1 bg-background flex flex-col justify-center gap-4 items-center w-full px-2 rounded-2xl">
            <div className="w-full">
              <Card className="bg-transparent shadow-none border-none rounded-none">
                <CardHeader className="border-b border-muted-foreground mx-4">
                  <CardTitle className="leading-none p-0 m-0 text-lg">
                    Conversion Success Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={piechartConfig}
                    className="mx-auto aspect-square max-h-[150px] w-full"
                  >
                    <PieChart width={150} height={150}>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Legend
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        iconType="circle"
                        iconSize={10}
                        formatter={(value) => (
                          <div className="text-sm text-foreground inline-flex items-center gap-1">
                            {`${value}`[0].toUpperCase() + `${value}`.slice(1)}
                          </div>
                        )}
                      />
                      <Pie
                        data={piechartData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={25}
                        cornerRadius={4}
                      ></Pie>
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <h3 className="w-full text-left pb-2 border-b font-bold">
                Top Performing Channel
              </h3>
              <div className="flex gap-2 justify-center items-center w-full">
                <div className="w-full aspect-video bg-[#FFD2BF99] flex flex-col items-center justify-center gap-2">
                  <h6 className="text-xs font-semibold">Facebook</h6>
                  <p className="text-lg font-bold">78%</p>
                </div>
                <div className="w-full aspect-video bg-[#FFC9E199]  flex flex-col items-center justify-center gap-2">
                  <h6 className="text-xs font-semibold">Twitter</h6>
                  <p className="text-lg font-bold">45%</p>
                </div>
                <div className="w-full aspect-video bg-[#D8F1FF99]  flex flex-col items-center justify-center gap-2">
                  <h6 className="text-xs font-semibold">LinkedIn</h6>
                  <p className="text-lg font-bold">23%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-4 bg-background h-95 p-4 rounded-2xl">
          <h2 className="font-bold mb-4">Recent Activities</h2>
          <div className="max-h-75 border-2 rounded-xl overflow-hidden border-dashed overflow-y-scroll">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left w-full font-bold">
                    Activities
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    <h3 className="w-[126px]">Date</h3>
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    <h3 className="w-[126px]">Time</h3>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium w-full text-muted-foreground">
                    Julian earned $10
                  </TableCell>
                  <TableCell className="w-[200px] text-center text-muted-foreground">
                    28-04-2024
                  </TableCell>
                  <TableCell className="w-[200px] text-center text-muted-foreground">
                    10:30 AM
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium w-full text-muted-foreground">
                    John Doe signed up from your referral link
                  </TableCell>
                  <TableCell className="w-[200px] text-center text-muted-foreground">
                    29-04-2024
                  </TableCell>
                  <TableCell className="w-[200px] text-center text-muted-foreground">
                    9:45 AM
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium w-full text-muted-foreground">
                    You reached 50 referrals milestone!
                  </TableCell>
                  <TableCell className="w-[200px] text-center text-muted-foreground">
                    30-04-2024
                  </TableCell>
                  <TableCell className="w-[200px] text-center text-muted-foreground">
                    8:20 AM
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium w-full text-muted-foreground">
                    You updated your referral campaign
                  </TableCell>
                  <TableCell className="w-[200px] text-center text-muted-foreground">
                    31-04-2024
                  </TableCell>
                  <TableCell className="w-[200px] text-center text-muted-foreground">
                    7:00 AM
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="w-full mb-10 bg-background h-95 p-4 rounded-2xl">
          <h2 className="font-bold mb-4">Leaderboard Table View</h2>
          <div className="max-h-75 border-2 rounded-xl overflow-hidden border-dashed overflow-y-scroll">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold">Rank</TableHead>
                  <TableHead className="text-center font-bold">
                    Promoter Name
                  </TableHead>
                  <TableHead className="text-center font-bold">
                    Conversion Rate
                  </TableHead>
                  <TableHead className="text-center font-bold">
                    Referral Sent
                  </TableHead>
                  <TableHead className="text-center font-bold">
                    Succesful Conversions
                  </TableHead>
                  <TableHead className="text-center font-bold">
                    Revenue Generated
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center text-muted-foreground">
                    1
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    Emery Dokidis
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    150
                  </TableCell>

                  <TableCell className="text-center text-muted-foreground">
                    80
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    60%
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    ${(1200).toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-muted-foreground">
                    2
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    Kaiya Estrin
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    135
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    70
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    52%
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    ${(950).toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-muted-foreground">
                    3
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    Jamir Velez
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    120
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    65
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    54%
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    ${(875).toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-muted-foreground">
                    4
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    Tina Avers
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    110
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    60
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    55%
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    ${(820).toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-muted-foreground">
                    5
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    Malik Chow
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    105
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    58
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    55%
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    ${(775).toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-muted-foreground">
                    6
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    Lina Chen
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    98
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    52
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    53%
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    ${(710).toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-muted-foreground">
                    7
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    Arjun Patel
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    93
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    50
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    54%
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    ${(690).toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-muted-foreground">
                    8
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    Dania Harper
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    88
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    46
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    52%
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    ${(645).toLocaleString()}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <Separator orientation="horizontal"/>
      </div>
    </>
  );
}

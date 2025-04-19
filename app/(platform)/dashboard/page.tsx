"use client"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, Pie, PieChart } from "recharts";
import { TrendingDown, TrendingUp } from "lucide-react";
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

function ChartCard() {
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig
  
  
    return (
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Pie Chart - Donut with Text</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
                strokeWidth={5}
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
                            className="fill-foreground text-3xl font-bold"
                          >
                          1,234
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    )
}

export default function Dashboard() {
  return (
    <>
      <div className="h-full w-full">
        <div className="flex justify-start items-center gap-0 w-full bg-background h-[112px]">
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

        <div className="flex w-full gap-4">
          <ChartCard />
          <ChartCard />
          <ChartCard />
          <ChartCard />
        </div>
      </div>
    </>
  );
}

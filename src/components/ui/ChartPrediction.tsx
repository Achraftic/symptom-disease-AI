"use client";

import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
    { browser: "safari", visitors: 40, fill: "#0D6EFD" }, // Example: 40% for Safari
];

const chartConfig: ChartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
};

// Custom Label Component
function CustomLabel({ viewBox }: { viewBox?: { cx?: number; cy?: number } }) {
    if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) return null;

    const percentage = chartData[0].visitors; // The percentage value is directly taken from data
    

    return (
        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
            <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                {percentage}%
            </tspan>
            <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground text-sm">
            Confidence
            </tspan>
          
        </text>
    );
}

export function ChartPrediction() {
    const totalProgress = 100; // 100% is the full progress
    const progressPercentage = chartData[0].visitors; // Get the percentage from the data
    const endAngle = (progressPercentage / totalProgress) * 360; // Calculate the endAngle

    return (
        <Card className="flex flex-col bg-background shadow-lg shadow-blue-200/40">
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square min-w-[150px]" // Smaller chart size
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={0}
                        endAngle={endAngle} // Use the calculated endAngle
                        innerRadius={60} // Smaller inner radius
                        outerRadius={80} // Smaller outer radius
                        width={150} // Smaller width
                        height={150} // Smaller height
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-muted last:fill-background"
                            polarRadius={[70, 60]} // Adjusted polar radius
                        />
                        <RadialBar
                            dataKey="visitors"
                            background
                            cornerRadius={10}
                            fill={chartData[0].fill}
                            strokeWidth={0}
                        />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label content={<CustomLabel />} />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
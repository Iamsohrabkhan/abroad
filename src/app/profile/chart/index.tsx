"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Rectangle,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";
import { CardDescription } from "@/components/ui/card";

const monthlyData: Record<string, { name: string; value: number }[]> = {
  august: [
    { name: "#1", value: 12 },
    { name: "#2", value: 18 },
    { name: "#3", value: 9 },
    { name: "#4", value: 14 },
    { name: "#5", value: 22 },
    { name: "#6", value: 17 },
    { name: "#7", value: 8 },
    { name: "#8", value: 11 },
    { name: "#9", value: 13 },
    { name: "#10", value: 19 },
    { name: "#11", value: 15 },
  ],
  september: [
    { name: "#1", value: 16 },
    { name: "#2", value: 21 },
    { name: "#3", value: 17 },
    { name: "#4", value: 9 },
    { name: "#5", value: 13 },
    { name: "#6", value: 20 },
    { name: "#7", value: 14 },
    { name: "#8", value: 10 },
    { name: "#9", value: 19 },
    { name: "#10", value: 18 },
  ],
  october: [
    { name: "#1", value: 11 },
    { name: "#2", value: 15 },
    { name: "#3", value: 20 },
    { name: "#4", value: 17 },
    { name: "#5", value: 13 },
    { name: "#6", value: 12 },
    { name: "#7", value: 18 },
    { name: "#8", value: 14 },
    { name: "#9", value: 19 },
    { name: "#10", value: 10 },
  ],
  november: [
    { name: "#1", value: 12 },
    { name: "#2", value: 14 },
    { name: "#3", value: 18 },
    { name: "#4", value: 16 },
    { name: "#5", value: 13 },
    { name: "#6", value: 11 },
    { name: "#7", value: 9 },
    { name: "#8", value: 20 },
    { name: "#9", value: 17 },
    { name: "#10", value: 15 },
  ],
  december: [
    { name: "#1", value: 14 },
    { name: "#2", value: 16 },
    { name: "#3", value: 13 },
    { name: "#4", value: 18 },
    { name: "#5", value: 12 },
    { name: "#6", value: 20 },
    { name: "#7", value: 10 },
    { name: "#8", value: 17 },
    { name: "#9", value: 19 },
    { name: "#10", value: 11 },
  ],
};


const monthList = ["august", "september", "october", "november", "december"];

export default function CustomMonthChart() {
  const [selectedMonth, setSelectedMonth] = useState("august");

 const [chartData, setChartData] = useState(monthlyData["august"]);

useEffect(() => {
  setChartData(monthlyData[selectedMonth]);
}, [selectedMonth]);


  return (
    <div className="w-full max-w-5xl mx-auto mt-8 px-4 ">
      <div className="flex justify-between">
        <div>
          <h2 className="text-6xl">
            912,2 <sub>km</sub>
          </h2>
          <CardDescription>aug 1 - sep 30, 2022</CardDescription>
        </div>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="max-w-[180px]">
            <SelectValue placeholder="Select a Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Months</SelectLabel>
              {monthList.map((month) => (
                <SelectItem key={month} value={month}>
                  {month.charAt(0).toUpperCase() + month.slice(1)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 0, left: 0 }}
          barCategoryGap={5}
          barGap={1}
        >
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#25D1A3" />
              <stop offset="50%" stopColor="#5FFFD6" />
              <stop offset="100%" stopColor="#25D1A3" />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" hide />
          <YAxis domain={[0, 25]} tickCount={6} />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="url(#greenGradient)"
            radius={[4, 4, 0, 0]}
            label={{ fill: "#000000", fontSize: 12, position: "top" }}
            activeBar={<Rectangle fill="#25D1A3" stroke="#5FFFD6" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

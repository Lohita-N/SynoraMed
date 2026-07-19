"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export function ValueChart({
  data,
  low,
  high,
  color = "#0d9488",
}: {
  data: { label: string; value: number }[];
  low: number;
  high: number;
  color?: string;
}) {
  return (
    <div className="h-40 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <ReferenceArea
            y1={low}
            y2={high}
            fill="#0d9488"
            fillOpacity={0.08}
            ifOverflow="extendDomain"
          />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #e5e9ee",
              fontSize: 12,
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2.5}
            dot={{ r: 3, fill: color }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

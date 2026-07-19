"use client";

import { useState } from "react";
import { Card, CardTitle, StatusPill } from "@/components/ui";
import { ValueChart } from "@/components/app/ValueChart";
import { labValues } from "@/lib/mock-data";

export default function TrendsPage() {
  const [selected, setSelected] = useState(labValues[0].name);
  const metric = labValues.find((v) => v.name === selected) ?? labValues[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Trends</h1>
        <p className="text-sm text-muted">
          Track how key values change across your reports over time.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm font-medium">Metric</label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-brand"
        >
          {labValues.map((v) => (
            <option key={v.name}>{v.name}</option>
          ))}
        </select>
      </div>

      <Card>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{metric.name}</CardTitle>
            <p className="mt-1 text-sm text-muted">
              Latest: {metric.value} {metric.unit} · Normal {metric.low}–
              {metric.high} {metric.unit}
            </p>
          </div>
          <StatusPill status={metric.status}>{metric.statusLabel}</StatusPill>
        </div>
        <div className="mt-4 h-72">
          <ValueChart
            data={metric.history}
            low={metric.low}
            high={metric.high}
            color={
              metric.status === "high"
                ? "#e11d48"
                : metric.status === "watch"
                  ? "#d97706"
                  : "#0d9488"
            }
          />
        </div>
      </Card>
    </div>
  );
}

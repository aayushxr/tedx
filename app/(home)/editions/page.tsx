import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { timeline } from "@/data";

export default function TimelineDemo() {
  return (
    <div className="w-full">
      <Timeline data={timeline} />
    </div>
  );
}

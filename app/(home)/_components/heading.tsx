"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-xl md:max-w-3xl space-y-4">
      <h1 className="text-3xl md:text-6xl font-bold">
        Upload your content to <span className="underline">Journa</span>
      </h1>
      <h3 className="text-base md:text-lg">
        Personal Knowledge Tracker. Store your ideas, document, photos for
        yourself or everyone else to show
      </h3>
      <Button>Get Started
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

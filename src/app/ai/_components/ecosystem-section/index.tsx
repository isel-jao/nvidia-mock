/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { links } from "../navbar/data";
import Marquee from "@/components/ui/marquee";

const data = [
  "https://www.nvidia.com/content/dam/en-zz/Solutions/ai/nvidia-ai-partners-1-dltp.png",
  "https://www.nvidia.com/content/dam/en-zz/Solutions/ai/nvidia-ai-partners-2-dltp.png",
];

export default function EcosystemSection() {
  return (
    <section id={links[6].url} className="py-container">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-container">
        <h4 className="text-center text-lg font-bold">Ecosystem</h4>
        <h2 className="text-center text-3xl font-bold">
          Take Your Enterprise AI Farther, Faster
        </h2>
        <p className="mx-auto max-w-screen-lg text-balance text-center text-lg font-normal">
          Join leading partners to develop your AI applications with models,
          toolkits, vector databases, frameworks, and infrastructure from our
          ecosystem.
        </p>
      </div>
      <div className="mt-4">
        <Marquee pauseOnHover className="[--duration:40s]">
          <img src={data[0]} alt="Nvidia AI Partners" />
        </Marquee>
        <Marquee pauseOnHover className="[--duration:50s]">
          <img src={data[1]} alt="Nvidia AI Partners" />
        </Marquee>
      </div>
    </section>
  );
}

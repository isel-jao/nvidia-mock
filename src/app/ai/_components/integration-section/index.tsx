"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useId } from "react";
import { links } from "../navbar/data";
import { CustomLink } from "@/app/components/custom-link";
import { CopyBlock } from "react-code-blocks";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { integrations } from "./data";

function IntegrationsCode() {
  const [active, setActive] = React.useState(0);
  const indicatorId = useId();
  return (
    <div className="flex w-1 flex-1 flex-col gap-2 overflow-hidden">
      <ul className="flex max-w-full gap-2">
        {integrations.map((item, index) => (
          <li key={item.name} className="relative">
            <button
              className={cn(
                "relative z-10 w-20 py-1 text-center transition-opacity",
                {
                  "opacity-75": active !== index,
                },
              )}
              onClick={() => setActive(index)}
            >
              {item.name.split(" ")[0]}
            </button>
            {active === index && (
              <motion.div
                layoutId={indicatorId}
                className="absolute inset-0 rounded-lg bg-foreground/20"
              ></motion.div>
            )}
          </li>
        ))}
      </ul>
      <div className="min-h-[18rem] rounded-xl border border-white/10 bg-foreground/10 p-4 text-sm">
        <CopyBlock
          theme={{
            mode: "dark",
            backgroundColor: "transparent",
          }}
          text={integrations[active]!.code}
          language={"bash"}
          wrapLongLines={false}
        />
      </div>
    </div>
  );
}

function IntegrationDescription() {
  return (
    <ul className="flex w-full flex-1 shrink-0 flex-col gap-6">
      {integrations.map((item, index) => (
        <li key={index} className="flex flex-col gap-3">
          <h4 className="text-2xl font-semibold capitalize">{item.name}</h4>
          <p className="text-balance font-light">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default function IntegrationsSection() {
  return (
    <section
      className="dark bg-black text-foreground"
      id={links[1].url.slice(1)}
    >
      <main
        className="mx-auto w-full max-w-screen-2xl border-foreground/20 p-container"
        style={{
          borderImage:
            "linear-gradient(to right, transparent, hsl(var(--primary)), white, hsl(var(--primary)), transparent)",
          borderImageSlice: 1,
          borderTopWidth: 2,
        }}
      >
        <p className="text-center font-semibold md:text-lg">Lorem, ipsum</p>
        <h2 className="text-center text-[clamp(1.5rem,2.3vw,2.3rem)] font-semibold">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p className="text-center font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className="mt-6 flex justify-center">
          <CustomLink name="Deploy Now" href="/deploy" />
        </div>
        <img
          src="https://www.nvidia.com/content/dam/en-zz/Solutions/ai/nvidia-ai-nim-diagram-all-1ccw-d.jpg"
          alt=""
          className="w-full object-contain"
        />
        <CustomLink
          name="Learn More About NVIDIA NIM"
          href="/nim"
          className="mx-auto"
        />
        <CustomLink
          name="See How to Deploy NIM in Five Minutes"
          href="/deploy"
          className="mx-auto mt-2"
        />
        <div className="mt-container flex gap-6">
          <IntegrationDescription />
          <IntegrationsCode />
        </div>
      </main>
    </section>
  );
}

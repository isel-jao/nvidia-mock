/* eslint-disable @next/next/no-img-element */
import React from "react";
import { links } from "../navbar/data";
import { image } from "framer-motion/client";
import { Card } from "@/components/ui/card";
import { CustomLink } from "@/app/components/custom-link";

const data = [
  {
    image:
      "https://www.nvidia.com/en-us/ai/home/_jcr_content/root/responsivegrid/nv_container_364046107/nv_container/nv_teaser.coreimg.100.410.jpeg/1728465997886/nvidia-avatars-ai-animation-ari.jpeg",
    name: "Digital Humans",
    description:
      "Bring game characters to life or create interactive virtual avatars to enhance customer service, empowering your application to connect more deeply with users.",
    url: "#",
  },
  {
    image:
      "https://www.nvidia.com/en-us/ai/home/_jcr_content/root/responsivegrid/nv_container_364046107/nv_container/nv_teaser_1043383465.coreimg.100.410.jpeg/1728465997919/nvidia-llm-content-generation-ari.jpeg",
    name: "Content Generation",
    description:
      "Generate highly relevant, bespoke, and accurate content, grounded in the domain expertise and proprietary IP of your enterprise.",
    url: "#",
  },
  {
    image:
      "https://www.nvidia.com/en-us/ai/home/_jcr_content/root/responsivegrid/nv_container_364046107/nv_container/nv_teaser_925599618.coreimg.100.410.jpeg/1728465997952/nvidia-biomolecular-generation.jpeg",
    name: "Biomolecular Generation",
    description:
      "Biomolecular generative models and the computational power of GPUs efficiently explore the chemical space, rapidly generating diverse sets of small molecules tailored to specific drug targets or properties.",
    url: "#",
  },
];

export default function UseCasesSection() {
  return (
    <section id={links[4].url.slice(1)}>
      <main className="mx-auto w-full max-w-screen-2xl space-y-4 p-container">
        <h4 className="text-center text-lg font-bold">Use Cases</h4>
        <h2 className="text-center text-3xl font-bold">
          Ignite Your Innovation
        </h2>
        <p className="text-center font-normal">
          See how NVIDIA APIs support industry use cases and jump-start your AI
          development with curated examples.
        </p>
        <ul className="!mt-12 grid grid-cols-3 gap-6">
          {data.map((item, i) => (
            <li
              key={i}
              className="flex flex-col overflow-hidden rounded-lg border shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="aspect-video w-full object-cover"
              />
              <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p>{item.description}</p>
                <CustomLink
                  href={item.url}
                  name="Learn More"
                  className="mt-auto"
                />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}

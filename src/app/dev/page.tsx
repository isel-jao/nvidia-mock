"use client";
import React from "react";
import {
  SlidesSection,
  SlidesSectionProps,
} from "../components/slides-section";

const data: SlidesSectionProps = {
  title: "Robotics and Edge AI",
  subtitle:
    "The NVIDIA Jetson™ and Isaac™ platforms provide end-to-end solutions to develop and deploy AI-powered autonomous machines and edge computing applications across manufacturing, logistics, healthcare, smart cities, and retail.",
  slides: Array.from({ length: 10 }).map((_, i) => ({
    image: `/images/placeholder.svg`,
    tag: "tag",
    type: "type",
    title: "NVIDIA Advances Robot Learning With AI and Simulation Tools",
    subtitle:
      "New robot learning workflows and AI world model development tools can help robotics developers accelerate their AI-enabled robot and humanoid projects.",
    href: `/blogs/blog-${i}`,
  })),
  quickLinks: Array.from({ length: 10 }).map((_, i) => ({
    name: `quick link ${i}`,
    href: `/quick-link-${i}`,
  })),
};

export default function Page() {
  return (
    <main>
      <SlidesSection {...data} />
    </main>
  );
}

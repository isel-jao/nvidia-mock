/* eslint-disable @next/next/no-img-element */
import React from "react";
import { links } from "../navbar/data";
import OddEven from "@/components/odd-even-grid";
import { items } from "./data";

export default function ModelsSection() {
  return (
    <section
      className="dark bg-black text-foreground"
      id={links[0].url.slice(1)}
    >
      <main className="mx-auto w-full max-w-screen-2xl p-container">
        <p className="text-center font-semibold md:text-lg">Lorem, ipsum</p>
        <h2 className="text-center text-[clamp(1.5rem,2.3vw,2.3rem)] font-semibold">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p className="text-center font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <OddEven items={items} className="mt-container" />
      </main>
    </section>
  );
}

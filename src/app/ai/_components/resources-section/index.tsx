/* eslint-disable @next/next/no-img-element */
import React from "react";
import { links } from "../navbar/data";
import { CustomLink } from "@/app/components/custom-link";
import { data } from "./data";

export default function ResourcesSection() {
  return (
    <section id={links[6].url.slice(1)}>
      <main className="mx-auto w-full max-w-screen-2xl space-y-4 p-container">
        <h4 className="text-center text-lg font-bold">Resources</h4>
        <h2 className="text-center text-3xl font-bold">
          Unlock, Upskill, and Upscale
        </h2>
        <ul className="!mt-12 grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-6">
          {data.map((item, i) => (
            <li
              key={i}
              className="flex flex-col overflow-hidden rounded-xl border shadow-xl transition-shadow duration-500 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-video w-full object-cover"
              />
              <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <h5>{item.tag}</h5>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p>{item.description}</p>
                <CustomLink
                  href={item.url.href}
                  name={item.url.name}
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

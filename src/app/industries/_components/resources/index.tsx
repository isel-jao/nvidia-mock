import React from "react";
import { links } from "../navbar/data";

export default function ResourcesSection() {
  return (
    <section id={links[1].href}>
      <main className="mx-auto w-full max-w-screen-2xl p-container"></main>
    </section>
  );
}

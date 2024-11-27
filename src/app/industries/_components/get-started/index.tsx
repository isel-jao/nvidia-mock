import React from "react";
import { links } from "../navbar/data";

export default function GetStartedSection() {
  return (
    <section id={links[3].href.slice(1)}>
      <main className="mx-auto w-full max-w-screen-2xl p-container"></main>
    </section>
  );
}

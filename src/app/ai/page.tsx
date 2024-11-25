import React from "react";
import HeroSection from "./_components/hero-section";
import Navbar from "./_components/navbar";
import ModelsSection from "./_components/models-section";

export default function Page() {
  return (
    <main className="[&>*]:scroll-m-[calc(var(--upbar-height)+var(--navbar-height))]">
      <HeroSection />
      <Navbar />
      <ModelsSection />
      <section
        id="integrations"
        className="grid h-[200vh] place-content-center border text-4xl"
      >
        Integrations
      </section>
      <section
        id="run-anywhere"
        className="grid h-[200vh] place-content-center border text-4xl"
      >
        Run Anywhere
      </section>
      <section
        id="get-started"
        className="grid h-[100vh] place-content-center border text-4xl"
      >
        Get Started
      </section>
      <section
        id="use-cases"
        className="grid h-[100vh] place-content-center border text-4xl"
      >
        Use Cases
      </section>
      <section
        id="ecosystem"
        className="grid h-[100vh] place-content-center border text-4xl"
      >
        Ecosystem
      </section>
      <section
        id="resources"
        className="grid h-[100vh] place-content-center border text-4xl"
      >
        Resources
      </section>
      <section
        id="docs"
        className="grid h-[100vh] place-content-center border text-4xl"
      >
        Docs
      </section>
    </main>
  );
}

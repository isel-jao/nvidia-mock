import React from "react";
import HeroSection from "./_components/hero-section";
import Navbar from "./_components/navbar";
import IntegrationsSection from "./_components/integrations-section";
import RunAnyWhereSection from "./_components/run-any-where-section";
import ModelsSection from "./_components/models-section";
import GetStartedSection from "./_components/get-started-section";
import UseCasesSection from "./_components/use-cases-section";
import ResourcesSection from "./_components/resources-section";
import DocumentationSection from "./_components/documentation-section";

export default function Page() {
  return (
    <main className="[&>*]:scroll-m-[calc(var(--upbar-height)+var(--navbar-height))]">
      <HeroSection />
      <Navbar />
      <ModelsSection />
      <IntegrationsSection />
      <RunAnyWhereSection />
      <GetStartedSection />
      <UseCasesSection />
      <section
        id="ecosystem"
        className="grid h-[100vh] place-content-center border text-4xl"
      >
        Ecosystem
      </section>
      <ResourcesSection />
      <DocumentationSection />
    </main>
  );
}

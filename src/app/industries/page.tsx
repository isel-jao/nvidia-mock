import React from "react";
import HeroSection from "./_components/hero-section";
import Navbar from "./_components/navbar";

export default function Page() {
  return (
    <main className="[&>*]:scroll-m-[calc(var(--upbar-height)+var(--navbar-height)-4px)]">
      <HeroSection />
      <Navbar />
    </main>
  );
}

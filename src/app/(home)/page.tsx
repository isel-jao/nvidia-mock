import { SlidesSection } from "../components/slides-section";
import { slide1Data } from "./_components/data";
import HeroSection from "./_components/hero";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SlidesSection {...slide1Data} />
    </main>
  );
}

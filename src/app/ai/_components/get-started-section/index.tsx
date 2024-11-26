import React from "react";
import { links } from "../navbar/data";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Start Prototyping for Free
// Get started with easy-to-use, NVIDIA-managed serverless APIs.

// Access fully accelerated AI infrastructure.
// Ensure your data isn't used for model training.
// Get started for free with 1,000 inference credits.

// Download and Deploy
// Run NVIDIA NIM to scale optimized AI models in the cloud or data center of your choice.

// Ensure that data never leaves your secure enclave.
// Seamlessly transition from cloud endpoints to self-hosted APIs without code changes.
// Use an NVIDIA AI Enterprise license for production, or get started for free with the NVIDIA Developer Program.

const data = [
  {
    title: "Start Prototyping for Free",
    description:
      "Get started with easy-to-use, NVIDIA-managed serverless APIs.",
    points: [
      "Access fully accelerated AI infrastructure.",
      "Ensure your data isn't used for model training.",
      "Get started for free with 1,000 inference credits.",
    ],
  },
  {
    title: "Download and Deploy",
    description:
      "Run NVIDIA NIM to scale optimized AI models in the cloud or data center of your choice.",
    points: [
      "Ensure that data never leaves your secure enclave.",
      "Seamlessly transition from cloud endpoints to self-hosted APIs without code changes.",
      "Use an NVIDIA AI Enterprise license for production, or get started for free with the NVIDIA Developer Program.",
    ],
  },
];

export default function GetStartedSection() {
  return (
    <section
      id={links[3].url.slice(1)}
      className="dark bg-black py-container text-foreground"
      style={{
        borderImage:
          "linear-gradient(to right, transparent, hsl(var(--primary)), white, hsl(var(--primary)), transparent)",
        borderImageSlice: 1,
        borderTopWidth: 2,
      }}
    >
      <main className="mx-auto w-full max-w-screen-2xl px-container">
        <h2 className="text-center text-4xl font-semibold">Get Started</h2>
        <div className="mt-8 grid grid-cols-2 gap-6">
          {data.map((item, i) => (
            <div key={i} className="rounded-xl bg-foreground/10 p-6">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-7 font-light">{item.description}</p>
              <ul>
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="mt-2 flex items-center gap-2 font-light"
                  >
                    <CheckIcon className="text-green-500" size={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" className="border border-primary">
            Build Noe
          </Button>
        </div>
      </main>
    </section>
  );
}

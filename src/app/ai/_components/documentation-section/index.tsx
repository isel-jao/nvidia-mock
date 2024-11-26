import React from "react";
import { links } from "../navbar/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CustomLink } from "@/app/components/custom-link";

export default function DocumentationSection() {
  return (
    <section
      id={links[7].url.slice(1)}
      className="dark bg-black text-foreground"
    >
      <main className="mx-auto w-full max-w-screen-2xl space-y-6 p-container">
        <h2 className="text-center text-2xl font-bold">Documentation</h2>
        <p className="text-balance text-center text-xl font-light">
          Explore technical documentation to start prototyping and building your
          enterprise AI applications with NVIDIA APIs, or scale on your own
          infrastructure with NVIDIA NIM.
        </p>
        <div className="flex items-baseline justify-center gap-6">
          <Link href="/api">
            <Button variant="outline" className="border-primary" size="lg">
              NVIDIA API Docs
            </Button>
          </Link>
          <CustomLink href="/nim" name="NVIDIA NIM Docs" />
        </div>
      </main>
    </section>
  );
}

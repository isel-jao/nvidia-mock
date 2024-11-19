"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const scrollXAmount = 600;

export default function Page() {
  const ref = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  return (
    <div className="overflow-hidden p-container">
      <div className="mx-auto flex w-full max-w-screen-md flex-col space-y-4">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold capitalize">title title </h3>
          <Button
            className="ml-auto"
            size="icon"
            onClick={() => {
              x.set(x.get() + scrollXAmount);
            }}
          >
            <ChevronLeft size={32} />
          </Button>
          <Button
            size="icon"
            onClick={() => {
              x.set(x.get() - scrollXAmount);
            }}
          >
            <ChevronRight size={32} />
          </Button>
        </div>

        <motion.div ref={containerRef}>
          <motion.div
            drag="x"
            ref={ref}
            style={{
              translateX: springX,
            }}
            dragConstraints={containerRef}
            className="flex h-96 w-fit"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="grid aspect-square h-full shrink-0 place-content-center text-3xl odd:bg-gray-100 even:bg-gray-200"
              >
                {i + 1}
              </div>
            ))}
          </motion.div>
        </motion.div>
        <div className="h-1 w-full bg-foreground/10"></div>
      </div>
    </div>
  );
}

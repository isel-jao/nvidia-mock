"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import "./index.css";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export interface SlidesSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  slides: {
    image: string;
    tag: string;
    type: string;
    title: string;
    subtitle: string;
    href: string;
  }[];
  quickLinks: {
    name: string;
    href: string;
  }[];
}

export function SlidesSection(props: SlidesSectionProps) {
  const slidesRef = React.useRef<HTMLDivElement>(null);
  const [showLinks, setShowLinks] = React.useState(false);

  function handleNext() {
    const target = slidesRef.current;
    if (!target) return;
    const children = target.children as HTMLCollectionOf<HTMLElement>;
    const slides = Array.from(children);
    const currentScroll = target.scrollLeft;
    const [firstSlide, secondSlide, thirdSlide] = slides;
    if (!firstSlide || !secondSlide) return;
    const marginLeft = firstSlide.offsetLeft;
    const offset = secondSlide.offsetLeft - marginLeft;
    if (currentScroll < offset)
      target.scrollTo({ left: currentScroll + offset });
    else if (thirdSlide)
      target.scrollTo({
        left: currentScroll + thirdSlide.offsetLeft - secondSlide.offsetLeft,
      });
  }

  function handlePrev() {
    const target = slidesRef.current;
    if (!target) return;
    const children = target.children as HTMLCollectionOf<HTMLElement>;
    const slides = Array.from(children);
    const currentScroll = target.scrollLeft;
    const marginLeft = slides[0].offsetLeft;
    const [firstSlide, secondSlide, thirdSlide] = slides;
    if (!firstSlide || !secondSlide) return;
    const offset = secondSlide.offsetLeft - marginLeft;
    if (currentScroll < offset + 4) target.scrollTo({ left: 0 });
    else if (thirdSlide)
      target.scrollTo({
        left: currentScroll - thirdSlide.offsetLeft + secondSlide.offsetLeft,
      });
  }

  return (
    <section className="container relative h-[38rem]">
      <div className="flex h-[3rem] items-end gap-4">
        <h3 className="text-3xl font-semibold capitalize">title title </h3>
        <Button className="ml-auto" size="icon" onClick={handlePrev}>
          <ChevronLeft size={32} />
        </Button>
        <Button size="icon" onClick={handleNext}>
          <ChevronRight size={32} />
        </Button>
      </div>
      <div
        className="carousel-slides h-[calc(38rem-3rem)] py-6"
        ref={slidesRef}
      >
        <div className="w-[36rem] shrink-0">
          <p className="text-balance text-xl font-light">{props.subtitle}</p>
          <button
            className="mt-6 flex items-center gap-1 px-0 text-base font-semibold capitalize"
            onClick={() => setShowLinks((prev) => !prev)}
          >
            <ChevronDown
              size={24}
              className={cn("text-primary transition-transform duration-300", {
                "rotate-180": showLinks,
              })}
            />
            <span>quick links</span>
          </button>
          <AnimatePresence>
            {showLinks && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-semibold"
              >
                {props.quickLinks.map((link, i) => (
                  <Link
                    className="group flex gap-1 text-base capitalize"
                    href={link.href}
                    key={i}
                  >
                    <span>{link.name}</span>
                    <ChevronRight
                      size={20}
                      className="text-primary transition-transform group-hover:translate-x-1 group-hover:scale-105"
                    />
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {props.slides.map((slide, i) => (
          <Link href={slide.href} key={i} className="ml-4 w-[24rem] shrink-0">
            <Card
              key={i}
              id={`slide-${i}`}
              className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-video">
                <Image
                  fill
                  src={props.slides[i].image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex h-1 flex-1 flex-col gap-4 overflow-hidden p-4">
                <div className="relative flex items-center gap-3 font-semibold capitalize">
                  <span>{slide.tag}</span>
                  <span className="relative inline-block h-5 w-0.5 rounded bg-foreground" />
                  <span>{slide.type}</span>
                </div>
                <h4 className="text-xl font-semibold">{slide.title}</h4>
                <h5 className="text-base font-light">{slide.subtitle}</h5>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

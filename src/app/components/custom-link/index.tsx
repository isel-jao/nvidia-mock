import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface CustomLinkProps {
  href: string;
  name: string;
  className?: string;
}
export function CustomLink({ name, href, className }: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        "group flex w-fit items-center gap-2 font-bold",
        className,
      )}
    >
      <span>{name}</span>
      <ChevronRightIcon
        strokeWidth={3}
        className="text-primary transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-foreground"
      />
    </Link>
  );
}

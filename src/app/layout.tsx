import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Upbar from "./components/upbar";
import Footer from "./components/footer";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  TwitchIcon,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CopyRightComponent from "./components/copy-right";

const BeVietnamPro = localFont({
  src: [
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Nvidia",
  description: "Nvidia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          "min-h-[100dvh] pt-upbar antialiased",
          BeVietnamPro.className,
        )}
      >
        <Upbar />
        {children}
        <Footer
          title="test title"
          data={[
            {
              title: "Company Information",
              links: [
                {
                  name: "About Us",
                  redirect: "/about",
                },
                {
                  name: "Company Overview",
                  redirect: "/company-overview",
                },
                {
                  name: "Investors",
                  redirect: "/investors",
                },
                {
                  name: "Venture Capital (NVentures)",
                  redirect: "/nventures",
                },
                {
                  name: "NVIDIA Foundation",
                  redirect: "/nvidia-foundation",
                },
                {
                  name: "Research",
                  redirect: "/research",
                },
                {
                  name: "Corporate Sustainability",
                  redirect: "/corporate-sustainability",
                },
                {
                  name: "Technologies",
                  redirect: "/technologies",
                },
                {
                  name: "Careers",
                  redirect: "/careers",
                },
              ],
            },
            {
              title: "Company Information",
              links: [
                {
                  name: "About Us",
                  redirect: "/about",
                },
                {
                  name: "Company Overview",
                  redirect: "/company-overview",
                },
                {
                  name: "Investors",
                  redirect: "/investors",
                },
                {
                  name: "Venture Capital (NVentures)",
                  redirect: "/nventures",
                },
                {
                  name: "NVIDIA Foundation",
                  redirect: "/nvidia-foundation",
                },
                {
                  name: "Research",
                  redirect: "/research",
                },
                {
                  name: "Corporate Sustainability",
                  redirect: "/corporate-sustainability",
                },
                {
                  name: "Technologies",
                  redirect: "/technologies",
                },
                {
                  name: "Careers",
                  redirect: "/careers",
                },
              ],
            },
            {
              title: "Company Information",
              links: [
                {
                  name: "About Us",
                  redirect: "/about",
                },
                {
                  name: "Company Overview",
                  redirect: "/company-overview",
                },
                {
                  name: "Investors",
                  redirect: "/investors",
                },
                {
                  name: "Venture Capital (NVentures)",
                  redirect: "/nventures",
                },
                {
                  name: "NVIDIA Foundation",
                  redirect: "/nvidia-foundation",
                },
                {
                  name: "Research",
                  redirect: "/research",
                },
                {
                  name: "Corporate Sustainability",
                  redirect: "/corporate-sustainability",
                },
                {
                  name: "Technologies",
                  redirect: "/technologies",
                },
                {
                  name: "Careers",
                  redirect: "/careers",
                },
              ],
            },
          ]}
          links={[
            { redirect: "/facebook", icon: <Facebook /> },
            { redirect: "/linkedin", icon: <Linkedin /> },
            { redirect: "/youtube", icon: <Youtube /> },
            { redirect: "/instagram", icon: <Instagram /> },
            { redirect: "/twitch", icon: <TwitchIcon /> },
            { redirect: "/github", icon: <Github /> },
          ]}
        >
          <div className="flex items-center gap-4">
            <Mail className="h-10 w-20 text-[#76b900]" />
            <span className="text-lg">Sign Up for NVIDIA News</span>
            <Button className="bg-[#76b900] text-white hover:bg-[#8cc722]">
              Subscribe
            </Button>
          </div>
        </Footer>
        <CopyRightComponent />
      </body>
    </html>
  );
}

"use client";
import React from "react";
import Logo from "../logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menuItems } from "./data";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Upbar() {
  const firstHref = menuItems.findIndex((item) => item.href);
  return (
    <NavigationMenu className="fixed left-0 top-0 z-20 h-upbar w-full max-w-none justify-start shadow">
      <div className="mx-auto w-full max-w-screen-2xl px-container">
        <div className="w-fit">
          <NavigationMenuList className="w-full!">
            <NavigationMenuItem className="">
              <Link href="/" legacyBehavior>
                <Logo className="h-6 fill-foreground" />
              </Link>
            </NavigationMenuItem>
            {menuItems.map((item, index) => {
              const { name, href, items } = item;
              return (
                <NavigationMenuItem key={index}>
                  {href && (
                    <Link href={href} legacyBehavior>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "cursor-pointer font-normal text-gray-600 hover:text-foreground",
                          {
                            "ml-auto": firstHref === index,
                          },
                        )}
                      >
                        {name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                  {items && (
                    <>
                      <NavigationMenuTrigger className="cursor-pointer font-normal text-gray-600 hover:text-foreground">
                        {name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="h-[40rem] !w-screen bg-white"></NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </div>
      </div>
      {/* </div> */}
    </NavigationMenu>
  );
}

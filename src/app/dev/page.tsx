"use client";
import React, { useId } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const TabsContext = React.createContext<{
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  onValueChange?: (value: number) => void;
  indicatorId: string;
} | null>(null);

export function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a Tabs component");
  }
  return context;
}

interface TabProps extends Omit<React.HTMLProps<HTMLLIElement>, "children"> {
  index: number;
  children: ((active: boolean) => React.ReactNode) | React.ReactNode;
}

function Tab({ children, index, className, ...props }: TabProps) {
  const { value, setValue, onValueChange, indicatorId } = useTabs();

  return (
    <li
      onClick={() => {
        setValue(index);
        onValueChange?.(index);
      }}
      role="tab"
      className={twMerge("relative cursor-pointer", className)}
      data-active={value === index}
      {...props}
    >
      <span className="relative z-10">
        {children instanceof Function ? children(value === index) : children}
      </span>
      {value === index && (
        <motion.div
          layoutId={indicatorId}
          className="absolute bottom-1 left-0 h-0.5 w-full bg-primary"
        />
      )}
    </li>
  );
}

interface TabsProps extends React.HTMLProps<HTMLUListElement> {
  value: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
}
function Tabs({
  className,
  defaultValue,
  onValueChange,
  children,
  ...props
}: TabsProps) {
  const [value, setValue] = React.useState(defaultValue ?? 0);
  const indicatorId = useId();
  return (
    <TabsContext.Provider
      value={{ value, setValue, indicatorId, onValueChange }}
    >
      <ul
        role="tablist"
        className={twMerge("relative flex", className)}
        {...props}
      >
        {children}
      </ul>
    </TabsContext.Provider>
  );
}

export default function page() {
  return (
    <div className="grid min-h-screen place-content-center">
      <Tabs value={0}>
        {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
          <Tab
            index={index}
            className="px-3 py-1.5 font-normal text-gray-600 data-[active=true]:text-foreground"
            key={index}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

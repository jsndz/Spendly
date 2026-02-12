import { navigationItems } from "@/types/types";
import React from "react";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-between items-center bg-background border-t border-border px-4 py-2">
      {navigationItems.map((item) => {
        const Icon = item.logo;
        return (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center gap-1 p-2"
          >
            <Icon />
            <p className="text-sm">{item.name}</p>
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation;

"use client";
import { SideNavItem } from "@/app/whitepaper/layout";
import React from "react";

interface SideNavBarProps {
  filteredSideNavConfig: SideNavItem[];
  openDropdowns: string[];
  toggleDropdown: (title: string) => void;
}

const SideNavBar: React.FC<SideNavBarProps> = ({
  filteredSideNavConfig,
  openDropdowns,
  toggleDropdown,
}) => {
  return (
    <nav className="w-64 overflow-y-auto bg-background text-white">
      <ul>
        {filteredSideNavConfig.map((section) => (
          <li key={section.title} className="p-4">
            <button
              onClick={() => toggleDropdown(section.title)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-bold">{section.title}</span>
              <span>{openDropdowns.includes(section.title) ? "▼" : "►"}</span>
            </button>
            <ul
              className={`ml-4 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdowns.includes(section.title)
                  ? "max-h-screen"
                  : "max-h-0"
              }`}
            >
              {section.items.map((item) => (
                <li key={item.title} className="p-2">
                  {item.items.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="flex w-full items-center justify-between text-left"
                      >
                        {item.title}
                        <span>
                          {openDropdowns.includes(item.title) ? "▼" : "►"}
                        </span>
                      </button>
                      <ul
                        className={`ml-4 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                          openDropdowns.includes(item.title)
                            ? "max-h-screen"
                            : "max-h-0"
                        }`}
                      >
                        {item.items.map((subItem) => (
                          <li key={subItem.title} className="p-2">
                            <a href={subItem.href} className="hover:underline">
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={item.href} className="hover:underline">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavBar;

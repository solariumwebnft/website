import { SideNavItem } from "@/app/whitepaper/layout";
import { sideNavConfig } from "@/data/whitepaper/sideNavConfig";
import { useState } from "react";

export const useWhitePaperNavigation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const filteredSideNavConfig: SideNavItem[] = sideNavConfig.map((section) => {
    const filteredItems = section.items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    return {
      ...section,
      items: filteredItems,
    };
  });

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prevOpenDropdowns) =>
      prevOpenDropdowns.includes(title)
        ? prevOpenDropdowns.filter((t) => t !== title)
        : [...prevOpenDropdowns, title],
    );
  };

  return {
    searchQuery,
    setSearchQuery,
    openDropdowns,
    toggleDropdown,
    filteredSideNavConfig,
  };
};

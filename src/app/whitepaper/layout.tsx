"use client";
import { PropsWithChildren } from "react";
import Header from "@/components/whitepaper/header";
import SideNavBar from "@/components/whitepaper/sideNavBar";
import { useWhitePaperNavigation } from "@/hooks/useWhitePaperNavigation";

export interface SideNavItem {
  _id?: string;
  title: string;
  href?: string;
  items: SideNavItem[];
}

const WhitePaperIndex = ({ children }: PropsWithChildren) => {
  const {
    searchQuery,
    setSearchQuery,
    openDropdowns,
    toggleDropdown,
    filteredSideNavConfig,
  } = useWhitePaperNavigation();

  return (
    <div className="flex h-screen flex-col">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex flex-1 overflow-hidden">
        <SideNavBar
          filteredSideNavConfig={filteredSideNavConfig}
          openDropdowns={openDropdowns}
          toggleDropdown={toggleDropdown}
        />

        <main className="flex-1 overflow-y-auto bg-white p-8">{children}</main>
      </div>
    </div>
  );
};

export default WhitePaperIndex;

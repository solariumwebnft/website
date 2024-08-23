"use client";
import { useState } from "react";
import { PropsWithChildren } from "react";

export interface SideNavItem {
  _id?: string;
  title: string;
  href?: string;
  items: SideNavItem[];
}

const sideNavConfig: SideNavItem[] = [
  {
    title: "Introduction",
    items: [
      {
        title: "Our History",
        href: "/whitepaper/introduction/our-history",
        items: [],
      },
      {
        title: "Our Values",
        href: "/whitepaper/introduction/our-values",
        items: [],
      },
      {
        title: "About the game",
        href: "/whitepaper/introduction/about-the-game",
        items: [],
      },
    ],
  },
  {
    title: "Game overview",
    items: [
      { title: "Lore", href: "/whitepaper/game-overview/lore", items: [] },
      { title: "IRR", href: "/whitepaper/game-overview/IRR", items: [] },
      { title: "Game", href: "/whitepaper/game-overview/game", items: [] },
      {
        title: "Contract Pool",
        href: "/whitepaper/game-overview/contract-pool",
        items: [],
      },
      {
        title: "Disclaimer",
        href: "/whitepaper/game-overview/disclaimer",
        items: [],
      },
      {
        title: "Affiliate Program",
        href: "/whitepaper/game-overview/affiliate-program",
        items: [],
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        title: "Upgrades",
        href: "/whitepaper/features/upgrades",
        items: [],
      },
      {
        title: "Modules",
        href: "/whitepaper/features/modules",
        items: [],
      },
      {
        title: "Rune System",
        items: [
          {
            title: "Orbi",
            href: "/whitepaper/features/rune-system/orbi",
            items: [],
          },
          {
            title: "Stellar Hash",
            href: "/whitepaper/features/rune-system/stellarhash",
            items: [],
          },
          {
            title: "Vitra",
            href: "/whitepaper/features/rune-system/vitra",
            items: [],
          },
        ],
      },
    ],
  },
  {
    title: "In development",
    items: [
      {
        title: "Dungeons",
        href: "/whitepaper/in-development/dungeons",
        items: [],
      },
      {
        title: "PVP",
        href: "/whitepaper/in-development/PVP",
        items: [],
      },
      {
        title: "PVE",
        href: "/whitepaper/in-development/PVE",
        items: [],
      },
    ],
  },
];

const WhitePaperIndex = ({ children }: PropsWithChildren) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const filteredSideNavConfig = sideNavConfig.map((section) => {
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

  return (
    <div className="flex h-screen flex-col">
      {/* Common Header */}
      <header className="flex w-full items-center justify-between bg-background p-4">
        <h1 className="text-lg font-bold text-white">Document Title</h1>
        <input
          type="text"
          placeholder="Search documents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded border border-gray-300 p-2"
        />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <nav className="w-64 overflow-y-auto bg-background text-white">
          <ul>
            {filteredSideNavConfig.map((section) => (
              <li key={section.title} className="p-4">
                <button
                  onClick={() => toggleDropdown(section.title)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-bold">{section.title}</span>
                  <span>
                    {openDropdowns.includes(section.title) ? "▼" : "►"}
                  </span>
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
                                <a
                                  href={subItem.href}
                                  className="hover:underline"
                                >
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

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-white p-8">{children}</main>
      </div>
    </div>
  );
};

export default WhitePaperIndex;

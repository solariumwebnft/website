import { SideNavItem } from "../../app/whitepaper/layout";

export const sideNavConfig: SideNavItem[] = [
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

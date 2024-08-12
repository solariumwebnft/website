import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const footerData = [
  {
    title: "MarketPlace",
    links: [
      "All NFTs",
      "Virtual worlds",
      "Domain names",
      "Photography",
      "Digital art",
      "Music",
    ],
  },
  {
    title: "Resource",
    links: [
      "Help center",
      "Platform status",
      "Partners",
      "Discount community",
      "Live auctions",
      "Discover",
    ],
  },
  {
    title: "Account",
    links: [
      "Authors",
      "My Collection",
      "Author Profile",
      "Go to dashboard",
      "Collection",
      "Create Collection",
    ],
  },

  {
    title: "Join the community",
    links: [],
    icons: [
      { icon: FaFacebookF, url: "https://www.facebook.com", label: "Facebook" },
      { icon: FaTwitter, url: "https://www.twitter.com", label: "Twitter" },
      {
        icon: FaInstagram,
        url: "https://www.instagram.com",
        label: "Instagram",
      },
      { icon: FaYoutube, url: "https://www.youtube.com", label: "YouTube" },
    ],
  },
];

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solarium",
  description:
    "An immersive and strategic NFT game that combines resource mining, space exploration and cryptocurrency trading.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Solarium",
    description:
      "An immersive and strategic NFT game that combines resource mining, space exploration and cryptocurrency trading.",
    url: "https://website-bice-five-12.vercel.app/",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 480,
        height: 137,
        alt: "Solarium",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

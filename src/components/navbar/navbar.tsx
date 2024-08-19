"use client";
import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const menuItems = [
    { label: "Wallet Connect", icon: <FaWallet />, key: "wallet1" },
  ];

  const navLinks = [
    { label: "Get Started", href: "#get-started", key: "get-started" },
    { label: "About us", href: "#about-us", key: "about-us" },
    { label: "Step by Step", href: "#step-by-step", key: "step-by-step" },
    { label: "Media", href: "#media", key: "media" },
  ];

  const [isLinksVisible, setIsLinksVisible] = useState<boolean>(false);

  const toggleLinks = () => {
    setIsLinksVisible(!isLinksVisible);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    const offset = href === "#media" ? -30 : 70;
    if (target) {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="relative top-0 z-[100] w-full bg-background">
      <div className="mx-auto flex max-w-[366px] items-center justify-between bg-background p-4 md:max-w-[864px] lg:max-w-[1110px]">
        <Link href="/" passHref>
          <Image
            src="/logomarca.svg"
            height={36}
            width={228}
            alt="Solarium Logo"
            className="cursor-pointer"
          />
        </Link>

        <div className="md:hidden">
          <Button
            data-collapse-toggle="navbar-default"
            variant={"link"}
            onClick={toggleLinks}
          >
            <span className="sr-only">Toggle Links</span>
            <svg
              className="w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </Button>
        </div>

        <div
          className="hidden w-full bg-background md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="flex items-center gap-6 align-middle">
            {navLinks.map((link) => (
              <li key={link.key} className="text-secondary">
                <a
                  href={link.href}
                  className="hover-underline font-barlow text-white"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {menuItems.map((item) => (
              <li key={item.key}>
                <Button className="button-glass z-[101] max-w-[44px] justify-center gap-3 p-2 px-4 font-barlow text-p14bold font-bold text-white transition-colors duration-300">
                  {item.label} {item.icon}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={` ${
          isLinksVisible ? "" : "hidden"
        } z-30 transform transition-all duration-300 ease-in-out md:hidden`}
      >
        <ul className="absolute z-[50] flex w-full flex-col gap-4 bg-background p-6">
          {navLinks.map((link) => (
            <li key={link.key} className="flex justify-center text-secondary">
              <a
                href={link.href}
                className="hover-underline font-barlow text-white"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          {menuItems.map((item) => (
            <li key={item.key} className="flex h-full">
              <Button
                style={{
                  alignItems: "center",
                  display: "flex",
                  minWidth: "100%",
                }}
                className="button-glass z-[101] max-w-[44px] justify-center gap-2 p-2 px-4 font-barlow text-p14bold font-bold text-white transition-colors duration-300"
              >
                {item.label} {item.icon}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

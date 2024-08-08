"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaWallet } from "react-icons/fa";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const menuItems = [
    { label: "Connect to wallet", icon: <FaWallet />, key: "wallet1" },
  ];
  const link = [
    { label: "session 1 ", key: "wallet1" },
    { label: "session 2 ", key: "wallet2" },
    { label: "session 3 ", key: "wallet3" },
  ];

  const [isLinksVisible, setIsLinksVisible] = useState<boolean>(false);

  const toggleLinks = () => {
    setIsLinksVisible(!isLinksVisible);
  };

  return (
    <nav className="top-0 z-10 w-full bg-background p-0 md:bg-transparent">
      <div className="mx-auto flex max-w-[100vw] items-center justify-between bg-background p-4 px-8">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            height={32}
            width={32}
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Flowbite
          </span>
        </a>

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

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="height-100% flex gap-6 align-middle">
            {link.map((item) => (
              <li key={item.key} className="h-100% flex">
                <Button
                  style={{
                    alignItems: "center",
                    display: "flex",
                    minHeight: "100%",
                    position: "relative",
                  }}
                  variant="link"
                  className="hover:underline-effect z-10 text-white"
                >
                  <span className="hover-underline">{item.label}</span>
                </Button>
              </li>
            ))}
            {menuItems.map((item) => (
              <li key={item.key}>
                <Button className="button-glass z-10 max-w-[44px] justify-between p-2 px-4 text-white transition-colors duration-300">
                  {item.label} {item.icon}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={` ${isLinksVisible ? "" : "hidden"} transform transition-all duration-300 ease-in-out md:hidden`}
      >
        <ul className="absolute flex w-full flex-col gap-4 bg-gray-500 p-6">
          {link.map((item) => (
            <li key={item.key}>
              <Button
                variant="link"
                style={{
                  alignItems: "center",
                  display: "flex",
                  minWidth: "100%",
                  position: "relative",
                }}
                className="hover:underline-effect z-10 p-6 text-white"
              >
                <span className="hover-underline">{item.label}</span>
              </Button>
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
                className="button-glass z-10 max-w-[44px] justify-center gap-2 p-2 px-4 text-white transition-colors duration-300"
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

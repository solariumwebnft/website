"use client";
import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import Image from "next/image";
import { Button } from "../ui/button";

export const Navbar: React.FC = () => {
  const menuItems = [
    { label: "Connect to wallet", icon: <FaWallet />, key: "wallet1" },
  ];

  const [isLinksVisible, setIsLinksVisible] = useState<boolean>(false);

  const toggleLinks = () => {
    setIsLinksVisible(!isLinksVisible);
  };

  return (
    <nav className="relative top-0 z-[100] w-full bg-background">
      <div className="mx-auto flex max-w-[100vw] items-center justify-between bg-background p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo.svg"
            className="h-8"
            height={50}
            width={50}
            alt="Solarium Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Solarium
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

        <div
          className="hidden w-full bg-background md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="height-100% flex gap-6 align-middle">
            {menuItems.map((item) => (
              <li key={item.key}>
                <Button className="button-glass z-[101] max-w-[44px] justify-between p-2 px-4 text-white transition-colors duration-300">
                  {item.label} {item.icon}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={` ${isLinksVisible ? "" : "hidden"} z-30 transform transition-all duration-300 ease-in-out md:hidden`}
      >
        <ul className="absolute z-[50] flex w-full flex-col gap-4 bg-background p-6">
          {menuItems.map((item) => (
            <li key={item.key} className="flex h-full">
              <Button
                style={{
                  alignItems: "center",
                  display: "flex",
                  minWidth: "100%",
                }}
                className="button-glass z-[101] max-w-[44px] justify-center gap-2 p-2 px-4 text-white transition-colors duration-300"
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

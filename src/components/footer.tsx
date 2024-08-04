import { footerData } from "@/lib/footerData";
import { FooterLogo } from "@/lib/footerLogo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="z-10 w-full bg-black px-10 py-10 text-white">
      <div className="container mx-auto">
        <div
          aria-label="footer logo"
          className="flex h-max w-max space-x-2 pb-8 md:flex lg:hidden"
        >
          <FooterLogo />
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div
            aria-label="footer logo"
            className="hidden h-max w-max space-x-2 md:hidden lg:flex"
          >
            <FooterLogo />
          </div>
          {footerData.map((section, index) => (
            <div key={index} className="">
              <h2 className="mb-4 font-semibold">{section.title}</h2>
              {section.links.length > 0 && (
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>{link}</li>
                  ))}
                </ul>
              )}
              {section.icons && (
                <div className="mt-4 flex space-x-4">
                  {section.icons.map((iconData, iconIndex) => {
                    const IconComponent = iconData.icon;
                    return (
                      <Link
                        key={iconIndex}
                        href={iconData.url}
                        aria-label={iconData.label}
                        // className={cn(
                        //   "text-gray-400 hover:text-white",
                        //   buttonVariants({
                        //     variant: "ghost",
                        //   }),
                        // )}
                      >
                        <IconComponent />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>© 2024 Solarium - Made By MIDNIGHT</p>
        <p>
          <a>Privacy Policy</a> | <a>Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

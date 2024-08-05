import { footerData } from "@/lib/footerData";
import { FooterLogo } from "@/lib/footerLogo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="z-10 w-full bg-black py-6 text-white">
      <div className="flex flex-col justify-center md:flex-row">
        <FooterLogo />
        <div className="flex flex-wrap justify-center px-10">
          {footerData.map((section, index) => (
            <div
              key={index}
              className="min-w-[200px] flex-1 justify-center py-4"
            >
              <h2 className="mb-4 font-semibold">{section.title}</h2>
              {section.links.length > 0 && (
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li className="text-gray-400" key={linkIndex}>
                      {link}
                    </li>
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

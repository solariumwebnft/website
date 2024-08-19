import { footerData } from "@/data/footerData";
import { FooterLogo } from "@/data/footerLogo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-background pb-4 text-white">
      <div className="flex flex-col items-center">
        <div className="flex max-w-[1030px] flex-col justify-center md:flex-row">
          <FooterLogo />
          <div className="flex flex-wrap justify-center gap-6 pl-8 md:pl-0">
            {footerData.map((section, index) => (
              <div
                key={index}
                className="min-w-[200px] flex-1 justify-center py-4 text-p16"
              >
                <h2 className="mb-4 font-barlow font-semibold">
                  {section.title}
                </h2>
                {section.links.length > 0 && (
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li
                        className="font-roboto-mono text-p14 text-[#D6D6D6]"
                        key={linkIndex}
                      >
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
        <div className="flex w-full max-w-[1030px] flex-col items-center px-7 pt-10 text-center xl:px-0">
          <hr className="w-full border-gray-700 pt-6" />
          <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
            <div className="flex">
              <p className="font-roboto-mono text-p14 text-[#A3A3A3]">
                © 2024 Solarium - Made By Factree
              </p>
            </div>
            <div className="flex gap-10 font-roboto-mono text-p14 text-[#A3A3A3]">
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

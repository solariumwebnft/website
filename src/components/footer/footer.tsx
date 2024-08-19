import { footerData } from "@/data/footerData";
import { FooterLogo } from "@/data/footerLogo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-background pb-4 text-white">
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-[1030px] flex-col justify-between sm:flex-row">
          <Link href="/" passHref>
            <FooterLogo />
          </Link>

          <div className="pl-8 sm:gap-6 md:pl-0">
            {footerData.map((section, index) => (
              <div key={index} className="min-w-[200px] py-4 text-p16">
                <h2 className="mb-4 font-barlow font-semibold">
                  {section.title}
                </h2>

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
                © 2024 Solarium - Made by{" "}
                <Link
                  href="https://www.factree.dev"
                  target="_blank"
                  className="hover:text-primary"
                >
                  factree
                </Link>
              </p>
            </div>
            <div className="flex gap-10 font-roboto-mono text-p14 text-[#A3A3A3]">
              <Link href="/disclaimer" className="hover:text-primary">
                Disclaimer
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

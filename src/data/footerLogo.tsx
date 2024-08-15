import Image from "next/image";

export const FooterLogo = () => {
  return (
    <div className="ml-6 mr-11 py-6 lg:ml-0">
      <Image
        src="/footer-logo.svg"
        height={36}
        width={228}
        alt="Solarium Logo"
      />
    </div>
  );
};

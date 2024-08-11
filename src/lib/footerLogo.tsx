import Image from "next/image";

export const FooterLogo = () => {
  return (
    <div className="px-12 py-5">
      <Image src="/logo.svg" height={50} width={50} alt="Flowbite Logo" />
    </div>
  );
};

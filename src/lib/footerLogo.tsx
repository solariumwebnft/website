import Image from "next/image";

export const FooterLogo = () => {
  return (
    <>
      <Image
        src="https://flowbite.com/docs/images/logo.svg"
        height={32}
        width={32}
        alt="Flowbite Logo"
      />
      <span className="text-2xl font-semibold">Flowbite</span>
    </>
  );
};

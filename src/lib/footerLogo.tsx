import Image from "next/image";

export const FooterLogo = () => {
  return (
    <div className="ml-10 py-4">
      <Image
        src="https://flowbite.com/docs/images/logo.svg"
        height={32}
        width={32}
        alt="Flowbite Logo"
      />
      <p className="text-2xl font-semibold">Flowbite</p>
    </div>
  );
};

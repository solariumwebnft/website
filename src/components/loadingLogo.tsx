import Image from "next/image";
import React from "react";

export const LoadingLogo = () => {
  return (
    <div className="flex min-h-[100vh] min-w-[100vw] items-center justify-center">
      <div className="animate-logoLoad flex max-h-[150px] min-w-[150px] bg-transparent">
        <Image
          src="/logo.svg"
          className="background-background"
          height={150}
          width={150}
          alt="Solarium Logo"
        />
      </div>
    </div>
  );
};

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { SparklesBackground } from "@/components/sparklesBackground";
import { DisclaimerData } from "@/data/DisclaimerData";
import React from "react";

const Disclaimer = () => {
  return (
    <div className="relative z-[0] m-0 flex min-h-screen w-full flex-col bg-background">
      <SparklesBackground />
      <header className="fixed top-0 z-10 w-full">
        <Navbar />
      </header>
      <main className="flex flex-grow flex-col justify-center px-10 pt-[4rem] md:px-20">
        <div className="flex max-w-full flex-col gap-4 py-20 text-center text-white xl:px-36">
          <h1 className="pb-10 text-center text-[40px] font-extrabold md:text-left lg:text-[45px] xl:text-center xl:text-[64px]">
            Disclaimer
          </h1>
          <DisclaimerData />
        </div>
      </main>
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Disclaimer;

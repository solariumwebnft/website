import Image from "next/image";
import WalletIcon from "../../assets/stepbystep/wallet.svg";
import BillIcon from "../../assets/stepbystep/bill.svg";
import MoneybagIcon from "../../assets/stepbystep/moneybag.svg";
import Marketdown from "../../assets/stepbystep/marketdown.svg";
import ArrowIcon from "../../assets/stepbystep/ArrowIcon";

export const Stepbystep = () => {
  return (
    <div className="container py-10">
      <div className="pb-10">
        <h1 className="text-center text-5xl font-medium">Step by Step</h1>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:flex xl:flex-row xl:justify-center xl:space-x-20 xl:space-y-0">
        <div className="group border-2 border-red-400 px-4 text-center">
          <div className="flex justify-center border-2 border-blue-700">
            <div className="border-2 border-green-400 pb-4">
              <div className="card mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-800">
                <Image src={WalletIcon} alt="wallet" className="h-11 w-11" />
              </div>
            </div>
            <div className="arrow group-hover:animate-dash hidden xl:block">
              <ArrowIcon />
            </div>
          </div>
          <div>
            <h2 className="pb-4 text-xl font-medium">Step 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>

        <div className="group border-2 border-red-400 px-4 text-center">
          <div className="pb-4">
            <div className="flex flex-row">
              <div className="card mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-800">
                <Image src={BillIcon} alt="bill" className="h-11 w-11" />
              </div>
              <div className="arrow group-hover:animate-dash hidden xl:block">
                <ArrowIcon />
              </div>
            </div>
          </div>
          <div>
            <h2 className="pb-4 text-xl font-medium">Step 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>

        <div className="group px-4 text-center">
          <div className="pb-4">
            <div className="flex flex-row">
              <div className="card mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-800">
                <Image src={Marketdown} alt="market" className="h-11 w-11" />
              </div>
              <div className="arrow group-hover:animate-dash hidden xl:block">
                <ArrowIcon />
              </div>
            </div>
          </div>
          <div>
            <h2 className="pb-4 text-xl font-medium">Step 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>

        <div className="group border-2 border-red-400 px-4 text-center">
          <div className="pb-4">
            <div className="flex flex-row">
              <div className="card mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-800">
                <Image
                  src={MoneybagIcon}
                  alt="money bag"
                  className="h-11 w-11"
                />
              </div>
            </div>
          </div>
          <div className="w-full text-center">
            <h2 className="pb-4 text-xl font-medium">Step 4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

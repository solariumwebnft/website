import Image from "next/image";
import WalletIcon from "../../assets/stepbystep/wallet.svg";
import BillIcon from "../../assets/stepbystep/bill.svg";
import MoneybagIcon from "../../assets/stepbystep/moneybag.svg";
import Marketdown from "../../assets/stepbystep/marketdown.svg";

export const Stepbystep = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="pb-10 text-center">
        <h1 className="text-5xl font-medium">Step by Step</h1>
      </div>
      <div className="flex flex-col items-center space-y-10 md:flex-row md:justify-center md:space-x-20 md:space-y-0">
        <div className="px-4 text-center">
          <div className="pb-4">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-800">
              <Image src={WalletIcon} alt="Wallet" className="h-11 w-11" />
            </div>
          </div>
          <h2 className="pb-4 text-xl font-medium">Step 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="px-4 text-center">
          <div className="pb-4">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-800">
              <Image src={BillIcon} alt="Bill" className="h-11 w-11" />
            </div>
          </div>
          <h2 className="pb-4 text-xl font-medium">Step 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="px-4 text-center">
          <div className="pb-4">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-800">
              <Image src={Marketdown} alt="Market Down" className="h-11 w-11" />
            </div>
          </div>
          <h2 className="pb-4 text-xl font-medium">Step 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="px-4 text-center">
          <div className="pb-4">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg border-2 bg-gray-800">
              <Image src={MoneybagIcon} alt="Money Bag" className="h-11 w-11" />
            </div>
          </div>
          <h2 className="pb-4 text-xl font-medium">Step 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

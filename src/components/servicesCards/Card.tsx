import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import imgCard from "@/assets/Images/servicesImgs/card.png";
import imgCard2 from "@/assets/Images/servicesImgs/card2.png";
import imgCard3 from "@/assets/Images/servicesImgs/card3.png";
import imgCard4 from "@/assets/Images/servicesImgs/card4.png";
import imgCard5 from "@/assets/Images/servicesImgs/card5.png";
import imgCard6 from "@/assets/Images/servicesImgs/card6.png";

export default function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="border border-black rounded-xl flex justify-between items-end sm:items-center p-4 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-8 justify-between h-full">
          <div className="flex flex-col items-start">
            <p className="bg-verdeClaro rounded-lg font-medium text-xl">
              Search engine
            </p>
            <p className="bg-verdeClaro rounded-lg font-medium text-xl">
              optimization
            </p>
          </div>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-foreground rounded-full p-1 text-verdeClaro group-hover:rotate-45 transition-all">
              <ArrowUpRight />
            </div>
            <p className="group-hover:opacity-50 transition-all max-sm:text-sm">
              Learn more
            </p>
          </Link>
        </div>

        <Image
          src={imgCard}
          alt="img"
          width={210}
          height={210}
          className="w-full max-w-24 sm:max-w-40"
        />
      </div>

      <div className="bg-verdeClaro border border-black rounded-xl flex justify-between items-end sm:items-center p-4 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-8 justify-between h-full">
          <div className="flex flex-col items-start">
            <p className="bg-background rounded-lg font-medium text-xl">
              Pay-per-click
            </p>
            <p className="bg-background rounded-lg font-medium text-xl">
              advertising
            </p>
          </div>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-foreground rounded-full p-1 text-verdeClaro group-hover:rotate-45 transition-all">
              <ArrowUpRight />
            </div>
            <p className="group-hover:opacity-50 transition-all max-sm:text-sm">
              Learn more
            </p>
          </Link>
        </div>

        <Image
          src={imgCard3}
          alt="img"
          width={210}
          height={210}
          className="w-full max-w-24 sm:max-w-40"
        />
      </div>

      <div className="bg-foreground border border-black rounded-xl flex justify-between items-end sm:items-center p-4 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-8 justify-between h-full">
          <div className="flex flex-col items-start">
            <p className="bg-background rounded-lg font-medium text-xl">
              Pay-per-click
            </p>
            <p className="bg-background rounded-lg font-medium text-xl">
              advertising
            </p>
          </div>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-background rounded-full p-1 text-foreground group-hover:rotate-45 transition-all">
              <ArrowUpRight />
            </div>
            <p className="group-hover:opacity-50 transition-all max-sm:text-sm text-background">
              Learn more
            </p>
          </Link>
        </div>

        <Image
          src={imgCard2}
          alt="img"
          width={210}
          height={210}
          className="w-full max-w-24 sm:max-w-40"
        />
      </div>

      <div className="border border-black rounded-xl flex justify-between items-end sm:items-center p-4 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-8 justify-between h-full">
          <div className="flex flex-col items-start">
            <p className="bg-verdeClaro rounded-lg font-medium text-xl">
              Email
            </p>
            <p className="bg-verdeClaro rounded-lg font-medium text-xl">
              optimization
            </p>
          </div>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-foreground rounded-full p-1 text-verdeClaro group-hover:rotate-45 transition-all">
              <ArrowUpRight />
            </div>
            <p className="group-hover:opacity-50 transition-all max-sm:text-sm">
              Learn more
            </p>
          </Link>
        </div>

        <Image
          src={imgCard4}
          alt="img"
          width={210}
          height={210}
          className="w-full max-w-24 sm:max-w-40"
        />
      </div>

      <div className="bg-verdeClaro border border-black rounded-xl flex justify-between items-end sm:items-center p-4 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-8 justify-between h-full">
          <div className="flex flex-col items-start">
            <p className="bg-background rounded-lg font-medium text-xl">
              Content
            </p>
            <p className="bg-background rounded-lg font-medium text-xl">
              Creation
            </p>
          </div>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-foreground rounded-full p-1 text-verdeClaro group-hover:rotate-45 transition-all">
              <ArrowUpRight />
            </div>
            <p className="group-hover:opacity-50 transition-all max-sm:text-sm">
              Learn more
            </p>
          </Link>
        </div>

        <Image
          src={imgCard5}
          alt="img"
          width={210}
          height={210}
          className="w-full max-w-24 sm:max-w-40"
        />
      </div>

      <div className="bg-foreground border border-black rounded-xl flex justify-between items-end sm:items-center p-4 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-8 justify-between h-full">
          <div className="flex flex-col items-start">
            <p className="bg-background rounded-lg font-medium text-xl">
              Analytics and
            </p>
            <p className="bg-background rounded-lg font-medium text-xl">
              Tracking
            </p>
          </div>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-background rounded-full p-1 text-foreground group-hover:rotate-45 transition-all">
              <ArrowUpRight />
            </div>
            <p className="group-hover:opacity-50 transition-all max-sm:text-sm text-background">
              Learn more
            </p>
          </Link>
        </div>

        <Image
          src={imgCard6}
          alt="img"
          width={210}
          height={210}
          className="w-full max-w-24 sm:max-w-40"
        />
      </div>
    </div>
  );
}

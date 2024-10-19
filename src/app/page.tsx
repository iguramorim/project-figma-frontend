import IntroImg from "@/assets/intro/IntroImg";
import GetYour from "@/assets/svg/GetYour";
import BtnRota from "@/components/intro/BtnRota";
import Card from "@/components/servicesCards/Card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 min-h-screen flex items-center">
        <div className="flex sm:justify-between items-center gap-10 sm:gap-5 max-sm:flex-col w-full">
          <div className="flex flex-col gap-5 max-w-screen-sm max-sm:mt-14">
            <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
              Navigating the <br /> digital landscape <br /> for success
            </h1>
            <p className="text-sm">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <BtnRota href="/">Book a consultation</BtnRota>
          </div>

          <figure className="w-full max-w-screen-2xl">
            <IntroImg />
          </figure>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-5 space-y-8">
        <div className="flex items-center gap-3 sm:gap-8 max-sm:flex-col">
          <h2 className="bg-verdeClaro p-2 rounded-lg text-lg font-medium">
            Services
          </h2>
          <p className="max-w-screen-sm max-sm:text-center text-sm">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        <Card />
      </div>

      <div className="max-w-screen-xl mx-auto px-5 py-5 sm:py-10">
        <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-5">
          <div className="flex flex-col gap-5 max-w-screen-sm">
            <h1 className="text-2xl font-medium">Let’s make things happen</h1>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <BtnRota href="/">Get your free proposal</BtnRota>
          </div>

          <figure className="w-full max-w-52 scale-150 mr-16 max-sm:hidden">
            <GetYour />
          </figure>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-5 space-y-8">
        <div className="flex items-center gap-3 sm:gap-8 max-sm:flex-col">
          <h2 className="bg-verdeClaro p-2 rounded-lg text-lg font-medium">
            Case Studies
          </h2>
          <p className="max-w-screen-sm max-sm:text-center text-sm">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="text-background bg-foreground rounded-lg p-5 grid grid-cols-3 gap-5 max-sm:flex max-sm:overflow-x-scroll max-sm:space-x-4 max-sm:snap-x max-sm:snap-mandatory max-sm:scroll-smooth">
          <div className="flex flex-col justify-center gap-10 border-r p-5 sm:p-10 min-w-[90%] snap-start">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link
              href="/"
              className="text-verdeClaro flex items-center gap-3 group"
            >
              Learn more
              <div className="group-hover:rotate-45 transition-all">
                <ArrowUpRight />
              </div>
            </Link>
          </div>

          <div className="flex flex-col justify-center gap-10 border-r p-5 sm:p-10 min-w-[90%] snap-start">
            <p>
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <Link
              href="/"
              className="text-verdeClaro flex items-center gap-3 group"
            >
              Learn more
              <div className="group-hover:rotate-45 transition-all">
                <ArrowUpRight />
              </div>
            </Link>
          </div>

          <div className="space-y-4 p-10 min-w-[90%] snap-start">
            <p>
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <Link
              href="/"
              className="text-verdeClaro flex items-center gap-3 group"
            >
              Learn more
              <div className="group-hover:rotate-45 transition-all">
                <ArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

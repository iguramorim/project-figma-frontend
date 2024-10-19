import LogoDrives from "@/assets/logo/LogoDrives";
import NavLink from "./NavLink";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background bg-opacity-80 backdrop-blur-md z-50">
      <section className="max-w-screen-xl mx-auto p-5 flex items-center justify-between gap-5">
        <figure className="w-full max-w-44">
          <LogoDrives />
        </figure>

        <nav className="max-sm:hidden space-x-6 text-sm">
          <NavLink href="/about">About us</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/use-cases">Use Cases</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/request" className="border border-black px-8 py-3 rounded-lg hover:bg-foreground hover:text-background transition-all">Request a quote</NavLink>
        </nav>

        <button className="sm:hidden">
          <Menu />
        </button>
      </section>
    </header>
  );
}

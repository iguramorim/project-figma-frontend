"use client";

import LogoDrives from "@/assets/logo/LogoDrives";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      // Bloqueia o scroll
      document.body.style.overflow = "hidden";
    } else {
      // Desbloqueia o scroll
      document.body.style.overflow = "auto";
    }

    // Limpa o efeito ao desmontar o componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);
  function MenuHamburguer() {
    setMenu(!menu);
  }
  return (
    <header className="fixed top-0 left-0 right-0 bg-background bg-opacity-80 backdrop-blur-md z-50">
      
      <section className="max-w-screen-xl mx-auto p-5 flex items-center justify-between gap-5">
        <figure className="w-full max-w-44">
          <LogoDrives />
        </figure>

        <menu
          className={`max-sm:bg-background max-sm:shadow-md max-sm:p-5 rounded-md max-sm:fixed top-5 ${
            menu ? "left-5" : "-left-96"
          } transition-all`}
        >
          <nav
            onClick={MenuHamburguer}
            className="text-sm flex sm:items-center max-sm:flex-col gap-1"
          >
            <NavLink href="/about">About us</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/use-cases">Use Cases</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink
              href="/request"
              className="border border-black px-8 py-3 rounded-lg hover:bg-foreground hover:text-background transition-all"
            >
              Request a quote
            </NavLink>
          </nav>
        </menu>

        <button onClick={MenuHamburguer} className="sm:hidden">
          {menu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </section>
    </header>
  );
}

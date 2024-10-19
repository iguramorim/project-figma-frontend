import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link href={href} className={`${className} hover:bg-foreground hover:text-background transition-all p-3 rounded-md`}>
      {children}
    </Link>
  );
}

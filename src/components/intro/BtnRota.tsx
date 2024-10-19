import Link from "next/link";
interface BtnRotaProps {
  href: string;
  children: string;
}

export default function BtnRota({ href, children }: BtnRotaProps) {
  return <Link href={href} className="bg-foreground hover:bg-opacity-70 transition-all p-3 text-background rounded-lg sm:max-w-64 text-center">{children}</Link>;
}

"use client";

import Image from "next/image";
import logo from "../../public/Header/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create Post",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image alt="logo" width={35} height={35} src={logo} />
      </Link>

      <nav>
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`hover:text-cyan-500 ${
                pathname === link.href && "font-bold"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { FaMapMarkedAlt, FaHammer } from "react-icons/fa";

const links = [
  { name: "Construcciones", href: "/builds", icon: <FaHammer /> },
];

export default function Navbar() {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/">
            <div className="text-gray-900">
              <span className="text-custom-violet font-semibold">Invierte</span>
              <span className="bg-custom-violet text-white px-0.5">CR</span>
            </div>
          </Link>

          <div className="h-full flex items-center space-x-4">
            <a
              href="/store"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Store
            </a>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/"
              className={buttonVariants({
                size: "sm",
                className: "hidden sm:flex items-center gap-1",
              })}
            >
              Contáctanos
              <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
            <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

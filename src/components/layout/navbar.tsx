"use client";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import fullLogo from "@/public/logo.png";
import logo from "@/public/logo-name.png";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shows",
    href: "/#upcoming-shows",
  },
  {
    name: "Music",
    href: "/music",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = ({ mode }: { mode: "Landing" | "General" }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section
      className={`${isScrolled || mode == "General" ? "bg-background border-b" : "bg-transparent"} fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src={logo}
                sizes="100vw"
                className="w-full h-10"
                alt="Lotus Tape Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            {navigation.map((nav) => (
              <a
                key={nav.name}
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href={nav.href}
              >
                {nav.name}
              </a>
            ))}
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src={logo}
                  sizes="20rem"
                  className="w-auto h-7 sm:h-8 md:w-auto md:h-auto"
                  alt="Lotus Tape Logo"
                />
              </Link>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="mr-2 h-10 w-10"
                >
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="overflow-y-auto"
                aria-describedby={undefined}
              >
                <SheetHeader>
                  <SheetTitle className="flex justify-center">
                    <Image
                      src={fullLogo}
                      sizes="100vw"
                      className="w-auto h-32"
                      alt="Lotus Tape Logo Drawer"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  {navigation.map((nav) => (
                    <SheetClose key={nav.name} asChild>
                      <Link href={nav.href} className="font-semibold">
                        {nav.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

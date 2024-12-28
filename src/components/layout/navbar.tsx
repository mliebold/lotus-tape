"use client";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
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
    // <section
    //   className={`py-4 w-full z-10 ${mode == "General" || isScrolled ? "relative" : "absolute"}`}
    // >
    <section
      className={`${isScrolled || mode == "General" ? "bg-background" : "bg-transparent"} fixed w-full py-4 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex">
          {/* <div className="flex items-center gap-6"> */}
          <div className="flex items-center gap-2">
            {/* <div className="h-14 relative"> */}
            <Link href="/">
              <Image
                src={logo}
                sizes="100vw"
                className="w-full h-10"
                alt="Lotus Tape Logo"
              />
            </Link>
            {/* </div> */}
            {/* <span className="text-xl font-bold">Lotus Tape</span> */}
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
                  })
                )}
                href={nav.href}
              >
                {nav.name}
              </a>
            ))}
          </div>
          {/* </div> */}
          {/* <div className="flex gap-2">
            <Button variant="outline">Log in</Button>
            <Button>Sign up</Button>
          </div> */}
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <div className="w-14 h-10 sm:w-20 sm:h-14 relative"> */}
              <Link href="/">
                <Image
                  src={logo}
                  sizes="100vw"
                  className="w-full h-10"
                  alt="Lotus Tape Logo"
                />
              </Link>
              {/* </div> */}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src={logo}
                      sizes="100vw"
                      className="w-full h-10"
                      alt="Lotus Tape Logo Drawer"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  {navigation.map((nav) => (
                    <Link
                      key={nav.name}
                      href={nav.href}
                      className="font-semibold"
                    >
                      {nav.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground"
                      )}
                      href="#"
                    >
                      Press
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground"
                      )}
                      href="#"
                    >
                      Contact
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground"
                      )}
                      href="#"
                    >
                      Imprint
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground"
                      )}
                      href="#"
                    >
                      Sitemap
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground"
                      )}
                      href="#"
                    >
                      Legal
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground"
                      )}
                      href="#"
                    >
                      Cookie Settings
                    </a>
                  </div>
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

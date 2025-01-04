import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import image from "@/public/lotus-tape-stage-dark.jpg";

export default function NotFound() {
  return (
    <>
      <Navbar mode="General" />
      <section className="relative h-[calc(50vh)] md:h-[calc(100vh-18rem)] lg:h-[calc(100vh-12rem)] xl:h-svh mt-[4.5rem] xl:mt-0">
        <Image
          src={image}
          alt="Lotus tape 404 image"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 h-full">
          <div className="container mx-auto px-2 grid gap-4 place-items-center">
            <h4 className="text-2xl font-semibold">Page not found</h4>
            <p className="text-sm">
              Sorry, but the page you&#39;re looking for has either moved or
              doesn&#39;t exist anymore.
            </p>
            <Button asChild>
              <Link href="/" className="mt-2">
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

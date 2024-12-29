import { Button } from "../ui/button";
import lotusTapeImage from "@/public/lotus-tape-stage.jpg";
import Image from "next/image";
import Link from "next/link";

export default function CTAContact() {
  return (
    <section className="py-32">
      <div className="relative">
        <div className="absolute inset-0 z-0 xl:h-svh">
          <Image
            src={lotusTapeImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative z-10 flex h-[620px] xl:h-svh items-center justify-center bg-black/60">
          <div className="flex flex-col gap-8 p-4 text-center text-primary-foreground">
            <h2 className="text-5xl text-white font-bold">
              Lets get connected
            </h2>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

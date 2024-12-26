import { Button } from "../ui/button";
import lotusTapeImage from "@/public/lotus-tape-stage.jpg";
import Image from "next/image";

export default function CTAContact() {
  return (
    <section className="py-32">
      <div className="container relative mx-auto">
        <div className="absolute inset-0 z-0">
          <Image
            src={lotusTapeImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-3xl"
          />
        </div>
        <div className="relative z-10 flex h-[620px] items-center justify-center rounded-3xl bg-black/60">
          <div className="flex flex-col gap-8 p-4 text-center text-primary-foreground">
            <h2 className="text-5xl text-white font-bold">
              Lets get connected
            </h2>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Contact</Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-0 bg-background/20 backdrop-blur-sm hover:bg-background/30 hover:text-primary-foreground"
              >
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="grid gap-8 place-items-center py-32 px-20 bg-gray-950">
    //   <h1 className="text-4xl font-extrabold">Contact for booking</h1>
    //   <Button>Contact</Button>
    // </div>
  );
}

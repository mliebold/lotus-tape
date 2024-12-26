import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function CTASubscribe() {
  return (
    <section className="py-32 bg-slate-950">
      <div className="container mx-auto">
        <div className="flex w-full flex-col gap-16 overflow-hidden p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Stay Locked In
            </h3>
            <p className="text-muted-foreground lg:text-lg">
              Get the latest info on upcoming shows and new music straight to
              your inbox. Don&apos;t miss out on what&apos;s next.
            </p>
          </div>
          <div className="shrink-0">
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Input placeholder="Enter your email" className="lg:min-w-72" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="grid grid-cols-2 gap-4 place-items-center py-20 md:py-36 px-20 bg-gray-950">
    //   <h1 className="text-xl font-bold text-muted-foreground">
    //     Stay up to date on new music and shows
    //   </h1>
    //   <div className="flex flex-col sm:flex-row gap-2">
    //     <Input
    //       placeholder="Enter your email"
    //       type="email"
    //       className=" text-xl h-20 md:text-xl"
    //     />
    //     <Button>Subscribe</Button>
    //   </div>
    // </div>
  );
}

import SubscribeForm from "../forms/subscribe";

export default function CTASubscribe() {
  return (
    <section className="py-32">
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
            <SubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
}

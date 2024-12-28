import ContactForm from "@/components/forms/contact";

export default function ContactPage() {
  return (
    <section className="py-32 mx-5 sm:mx-auto">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                Get in touch
              </h1>
              <p className="text-muted-foreground">
                For booking and inquries get in touch by filling out the form
                below or emailing Primal Productions Management directly.
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Email: </span>
                  <a
                    href="mailto:primalproductionsmgmt@gmail.com"
                    className="underline"
                  >
                    primalproductionsmgmt@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

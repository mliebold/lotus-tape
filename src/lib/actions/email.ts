"use server";

import { z } from "zod";
import { contactFormSchema } from "../schemas";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(values: z.infer<typeof contactFormSchema>) {
  console.log(values);

  const { data, error } = await resend.emails.send({
    from: values.email,
    to: ["mliebold95@gmail.com"],
    subject: "Message from lotustape.com",
    react: EmailTemplate({
      name: values.name,
      email: values.email,
      message: values.message,
    }),
  });
  console.log(data);
  console.log(error);
  if (error) {
    throw Error();
    //redirect("/error");
  }

  redirect("/");
  //   const validatedFields = contactFormSchema.safeParse({
  //     name: formData.get("email"),
  //     email: formData.get("email"),
  //     message: formData.get("message"),
  //   });

  //   if (!validatedFields.success) {
  //     return {
  //       errors: validatedFields.error.flatten().fieldErrors,
  //     };
  //   }

  //   // Send email
  //   console.log(validatedFields);
}

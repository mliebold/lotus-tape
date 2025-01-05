"use server";

import { z } from "zod";
import { contactFormSchema } from "../schemas";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";
import { ActionResponse } from "../types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(values: z.infer<typeof contactFormSchema>) {
  try {
    const { error } = await resend.emails.send({
      from: "send@lotustape.com",
      to: ["mliebold95@gmail.com"],
      subject: "Message from lotustape.com",
      react: EmailTemplate({
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    });

    if (error) {
      return {
        status: 400,
        message: "An error occurred during contact form submission.",
      } as ActionResponse;
    }

    return {
      status: 201,
      message: "Your message has been sent, well be in touch!",
    } as ActionResponse;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        status: 500,
        message: error.message || error.toString(),
      } as ActionResponse;
    }
    return {
      status: 500,
      message: "An unknown error has occurred",
    } as ActionResponse;
  }
}

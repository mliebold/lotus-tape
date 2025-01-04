"use client";

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name." }),
  email: z.string().min(1, { message: "Please enter your email." }).email(),
  message: z.string().min(1, { message: "Please enter a message." }),
});

export const subscribeFormSchema = z.object({
  email: z.string().min(1, { message: "Please enter your email." }).email(),
});

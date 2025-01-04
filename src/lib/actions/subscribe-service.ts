"use server";

import { z } from "zod";
import { subscribeFormSchema } from "../schemas";
import { ActionResponse } from "../types";

export async function subscribeEmail(
  values: z.infer<typeof subscribeFormSchema>,
) {
  const email = values.email;

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const API_SERVER_LOCATION = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `https://${API_SERVER_LOCATION}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      },
    );

    if (response.status >= 400) {
      const responseData = await response.json();
      if (responseData.title === "Member Exists") {
        return {
          status: response.status,
          message: `${values.email} is already subscribed.`,
        } as ActionResponse;
      }
      return {
        status: response.status,
        message: "There was an error subscribing.",
      } as ActionResponse;
    }

    return {
      status: 201,
      message:
        "Thank your subscribing, i'll reach out to you with info on upcoming shows and releases.",
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
      message: "An unknown error has occured",
    } as ActionResponse;
  }
}

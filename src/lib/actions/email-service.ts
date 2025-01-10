"use server";

import {
  SESClient,
  SESClientConfig,
  SendEmailCommand,
} from "@aws-sdk/client-ses";
import { ActionResponse } from "../types";
import { contactFormSchema } from "../schemas";
import { z } from "zod";

const SES_CONFIG: SESClientConfig = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
  region: process.env.AWS_SES_REGION as string,
};

const sesClient = new SESClient(SES_CONFIG);

const source = process.env.EMAIL_SOURCE;
const to = process.env.EMAIL_TO;
const cc = process.env.EMAIL_CC;

export async function sendEmail(values: z.infer<typeof contactFormSchema>) {
  const params = {
    Source: source || "",
    Destination: {
      CcAddresses: cc ? [cc] : undefined,
      ToAddresses: to ? [to] : undefined,
    },
    ReplyToAddresses: [values.email],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<h2>This is a form submission from https://www.lotustape.com/contact</h2><p><strong>Name:</strong> ${values.name}</p><p><strong>Email:</strong> ${values.email}</p><p><strong>Message:</strong> ${values.message}</p>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: `<h2>This is a form submission from https://www.lotustape.com/contact\nName: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Contact Submission From lotustape.com",
      },
    },
  };

  try {
    const sendEmailCommand = new SendEmailCommand(params);
    const result = await sesClient.send(sendEmailCommand);

    const statusCode = result.$metadata.httpStatusCode;

    if (statusCode && statusCode >= 400) {
      return {
        status: statusCode,
        message: "Your submission did not go through, please try again.",
      } as ActionResponse;
    }
    return {
      status: statusCode,
      message: "Email sent",
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

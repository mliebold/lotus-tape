"use server";

import {
  SESClient,
  SESClientConfig,
  SendTemplatedEmailCommand,
} from "@aws-sdk/client-ses";
import { ActionResponse } from "../types";
import { contactFormSchema } from "../schemas";
import { z } from "zod";

console.log("AWS Credentials:", {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const SES_CONFIG: SESClientConfig = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
  region: process.env.AWS_SES_REGION as string,
};

const sesClient = new SESClient(SES_CONFIG);

const TEMPLATE_NAME = "LotusTapeContactFormSubmissionTemplate";

const source = process.env.EMAIL_SOURCE;
const to = process.env.EMAIL_TO;
const cc = process.env.EMAIL_CC;

function createContactTemplateEmail(
  values: z.infer<typeof contactFormSchema>,
  templateName: string,
) {
  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: to ? [to] : undefined,
      CcAddresses: cc ? [cc] : undefined,
    },
    ReplyToAddresses: [values.email],
    TemplateData: JSON.stringify({
      contact: {
        name: values.name,
        email: values.email,
        message: values.message,
      },
    }),
    Source: source,
    Template: templateName,
  });
}

export async function sendEmail(values: z.infer<typeof contactFormSchema>) {
  try {
    // const sendEmailCommand = new SendEmailCommand(params);
    const result = await sesClient.send(
      createContactTemplateEmail(values, TEMPLATE_NAME),
    );
    console.log(result);
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

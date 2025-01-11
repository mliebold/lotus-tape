import { CreateTemplateCommand } from "@aws-sdk/client-ses";
import { SESClient } from "@aws-sdk/client-ses";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const SES_CONFIG = {
  credentials: {
    accessKeyId: process.env.AWS_IAM_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_SES_REGION,
};

const sesClient = new SESClient(SES_CONFIG);

const TEMPLATE_NAME = "LotusTapeContactFormSubmissionTemplate";

const createCreateTemplateCommand = () => {
  return new CreateTemplateCommand({
    Template: {
      TemplateName: TEMPLATE_NAME,
      HtmlPart: `
        <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Contact Form Submission</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f9f9f9;
                  color: #333333;
                  margin: 0;
                  padding: 0;
                }
                .email-container {
                  max-width: 600px;
                  margin: 20px auto;
                }
                p {
                  margin: 10px 0;
                  line-height: 1.6;
                }
                .highlight {
                  font-weight: bold;
                  color: #111111;
                }
              </style>
            </head>
          <body>
            <div class="email-container">
              <div class="body">
                <p>Sent via contact form submission from <a href="https://www.lotustape.com">Lotus Tape</a></p>
                <p><span class="highlight">Name:</span> {{ contact.name }}</p>
                <p><span class="highlight">Email:</span> {{ contact.email }}</p>
                <p><span class="highlight">Message:</span></p>
                <p>{{ contact.message }}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      SubjectPart: "Lotus Tape: Contact Form Submission",
    },
  });
};

const run = async () => {
  const createTemplateCommand = createCreateTemplateCommand();

  try {
    return await sesClient.send(createTemplateCommand);
  } catch (err) {
    console.log("Failed to create template.", err);
    return err;
  }
};

run();

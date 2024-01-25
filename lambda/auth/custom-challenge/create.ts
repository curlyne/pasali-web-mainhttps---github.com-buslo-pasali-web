import { SendEmailCommand } from "@aws-sdk/client-ses";
import { CreateAuthChallengeTriggerEvent } from "aws-lambda";
import { range, sample } from "lodash";
import { sesClient } from "../client/ses";

export async function customChallengeCreate(
  event: CreateAuthChallengeTriggerEvent,
) {
  if (event.request.userNotFound) {
    event.response.privateChallengeParameters = {
      sub: "pasali",
      aut: "123456",
    };
  } else {
    // Generate otp and send to email.
    const code = sample(range(100_000, 999_999))!!;
    event.response.privateChallengeParameters = {
      otp: `${code}`,
    };

    await sesClient.send(
      new SendEmailCommand({
        Source: process.env.SES_SOURCE,
        Destination: {
          ToAddresses: [event.request.userAttributes.email],
        },
        Message: {
          Subject: {
            Data: `Your ${process.env.APP_NAME} one-time code`,
          },
          Body: {
            Html: {
              Data: `<p>Enter <strong>${code}</strong> to continue logging in.</p>`,
            },
          },
        },
      }),
    );
  }

  return event;
}

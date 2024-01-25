import { SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { VerifyAuthChallengeResponseTriggerEvent } from "aws-lambda";
import { cognito } from "../client/cognito";

export async function customChallengeVerify(
  event: VerifyAuthChallengeResponseTriggerEvent,
) {
  const answerCorrect =
    event.request.privateChallengeParameters.otp ==
    event.request.challengeAnswer;

  if (answerCorrect) {
    await cognito.send(
      new SignUpCommand({
        Username: "",
        Password: "",
        ClientId: "",
        UserAttributes: Object.getOwnPropertyNames(
          event.request.userAttributes,
        ).map((attribute) => {
          const entry = event.request.userAttributes[attribute]!!;

          return {
            Name: attribute,
            Value: entry,
          };
        }),
      }),
    );
  }

  event.response.answerCorrect = answerCorrect;

  return event;
}

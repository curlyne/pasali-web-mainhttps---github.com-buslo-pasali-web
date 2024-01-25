import {
  CreateAuthChallengeTriggerEvent,
  DefineAuthChallengeTriggerEvent,
  PreSignUpTriggerEvent,
  VerifyAuthChallengeResponseTriggerEvent,
} from "aws-lambda";
import { customChallengeCreate } from "./custom-challenge/create";
import { customChallengeDefine } from "./custom-challenge/define";
import { customChallengeVerify } from "./custom-challenge/verify";

type CognitoAuthEvents =
  | VerifyAuthChallengeResponseTriggerEvent
  | CreateAuthChallengeTriggerEvent
  | DefineAuthChallengeTriggerEvent;

export async function handler(
  event: CognitoAuthEvents | PreSignUpTriggerEvent,
) {
  switch (event.triggerSource) {
    case "DefineAuthChallenge_Authentication":
      return customChallengeDefine(event);
    case "CreateAuthChallenge_Authentication":
      return customChallengeCreate(event);
    case "VerifyAuthChallengeResponse_Authentication":
      return customChallengeVerify(event);
    case "PreSignUp_SignUp":
      event.response.autoConfirmUser = true;
      event.response.autoVerifyEmail = true;
      break;
  }

  return event;
}

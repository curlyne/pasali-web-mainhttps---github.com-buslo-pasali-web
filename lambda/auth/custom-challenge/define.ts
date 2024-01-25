import { DefineAuthChallengeTriggerEvent } from "aws-lambda";

export async function customChallengeDefine(
  event: DefineAuthChallengeTriggerEvent,
) {
  switch (event.request.session.length) {
    case 0:
      event.response.challengeName = "CUSTOM_CHALLENGE";
      event.response.issueTokens = false;
      event.response.failAuthentication = false;
      break;
    case 1:
      event.response.issueTokens = event.request.session[0].challengeResult;
      event.response.failAuthentication = !event.response.issueTokens;
      break;
  }

  return event;
}

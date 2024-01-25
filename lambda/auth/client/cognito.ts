import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { fromEnv } from "@aws-sdk/credential-provider-env";

export const cognito = new CognitoIdentityProviderClient({
  credentials: fromEnv(),
});

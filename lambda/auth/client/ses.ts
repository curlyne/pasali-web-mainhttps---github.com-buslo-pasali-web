import { SESClient } from "@aws-sdk/client-ses";
import { fromEnv } from "@aws-sdk/credential-provider-env";

export const sesClient = new SESClient({
  credentials: fromEnv(),
});

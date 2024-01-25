"use client";

import FormSignupStep1 from "@/components/form/signup.step.1";
import { Button } from "@/components/ui/button";
import { createEvent } from "@/lib/domain/signup/action";
import { useFormState, useFormStatus } from "react-dom";
import Styles from "./content.module.css";

export default function SignupContent() {
  const [state, action] = useFormState(createEvent, { message: null });

  return (
    <form action={action} className={Styles.container}>
      {state.message != null && <span>{state.message}</span>}
      <FormSignupStep1 />
      <div className="flex-grow" />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4" variant="default" type="submit" disabled={pending}>
      {pending ? "Creating..." : "Continue"}
    </Button>
  );
}

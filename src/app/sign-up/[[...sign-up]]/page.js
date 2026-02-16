"use client";

// import * as React from "react";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { ClerkLoaded } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div>
      <ClerkLoaded>
        <SignUp.Root>
          <SignUp.Step name="start">
            <Clerk.Field name="emailAddress">
              <Clerk.Label>Email</Clerk.Label>
              <Clerk.Input placeholder="enter your email address" />
              <Clerk.FieldError className="field-error" />
            </Clerk.Field>
            <Clerk.Field name="password">
              <Clerk.Label>Password</Clerk.Label>
              <Clerk.Input placeholder="create your password" />
              <Clerk.FieldError className="field-error" />
            </Clerk.Field>
            <SignUp.Action submit>Continue</SignUp.Action>
          </SignUp.Step>
          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <Clerk.Field name="code">
                <Clerk.Label>Verification Code</Clerk.Label>
                <Clerk.Input placeholder="code" />
                <Clerk.FieldError className="field-error" />
              </Clerk.Field>
              <SignUp.Action submit>Verify</SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>
        </SignUp.Root>
      </ClerkLoaded>
      <div id="clerk-captcha" />
    </div>
  );
}

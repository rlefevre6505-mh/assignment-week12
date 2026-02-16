"use client";
import * as SignIn from "@clerk/elements/sign-in";
import * as Clerk from "@clerk/elements/common";
// import { ClerkLoaded } from "@clerk/nextjs";

export default function signInPage() {
  return (
    <div>
      {/* <ClerkLoaded> */}
      <SignIn.Root>
        <SignIn.Step name="start">
          <Clerk.Field name="identifier">
            <Clerk.Label>Email</Clerk.Label>
            <Clerk.Input placeholder="enter your email address" />
            <Clerk.FieldError className="field-error" />
          </Clerk.Field>
          <Clerk.Field name="password">
            <Clerk.Label>Password</Clerk.Label>
            <Clerk.Input placeholder="enter your password" />
            <Clerk.FieldError className="field-error" />
          </Clerk.Field>
          <SignIn.Action submit>Sign In</SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
      {/* </ClerkLoaded> */}
    </div>
  );
}

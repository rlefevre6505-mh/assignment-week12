"use client";

// import * as React from "react";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { ClerkLoaded } from "@clerk/nextjs";
import signupStyles from "./sign-up.module.css";

export default function SignUpPage() {
  return (
    <main className={signupStyles.main}>
      <h1 className={signupStyles.heading}>Sign up here</h1>
      <h2 className={signupStyles.subheading}>
        Add your email address and create a password to create your account
      </h2>
      <section className={signupStyles.form}>
        <ClerkLoaded>
          <SignUp.Root>
            <SignUp.Step name="start">
              <Clerk.Field name="emailAddress" className={signupStyles.field}>
                <Clerk.Label>Email:</Clerk.Label>
                <Clerk.Input
                  placeholder="Enter your email address"
                  className={signupStyles.input}
                />
                <Clerk.FieldError className="field-error" />
              </Clerk.Field>
              <Clerk.Field name="password" className={signupStyles.field}>
                <Clerk.Label>Password:</Clerk.Label>
                <Clerk.Input
                  placeholder="Create your password"
                  className={signupStyles.input}
                />
                <Clerk.FieldError className="field-error" />
              </Clerk.Field>
              <SignUp.Action submit className={signupStyles.button}>
                Continue
              </SignUp.Action>
            </SignUp.Step>
            <SignUp.Step name="verifications">
              <SignUp.Strategy name="email_code">
                <Clerk.Field name="code" className={signupStyles.field}>
                  <Clerk.Label>Verification Code</Clerk.Label>
                  <Clerk.Input placeholder="code" className={signupStyles.input}/>
                  <Clerk.FieldError className="field-error" />
                </Clerk.Field>
                <SignUp.Action submit>Verify</SignUp.Action>
              </SignUp.Strategy>
            </SignUp.Step>
          </SignUp.Root>
        </ClerkLoaded>
      </section>
      <div id="clerk-captcha" />
    </main>
  );
}

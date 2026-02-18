"use client";
import * as SignIn from "@clerk/elements/sign-in";
import * as Clerk from "@clerk/elements/common";
import signinStyles from "./sign-in.module.css";
import Link from "next/link";

export default function signInPage() {
  return (
    <>
      <Link href="/sign-up" className={signinStyles.signupLink}>
        sign up
      </Link>
      <main className={signinStyles.main}>
        <h1 className={signinStyles.heading}>Sign in here</h1>
        <h2 className={signinStyles.subheading}>Sign in to see your matches</h2>
        <section className={signinStyles.form}>
          {/* <ClerkLoaded> */}
          <SignIn.Root>
            <SignIn.Step name="start">
              <Clerk.Field name="identifier" className={signinStyles.field}>
                <Clerk.Label>Email:</Clerk.Label>
                <Clerk.Input
                  placeholder="Enter your email address"
                  className={signinStyles.input}
                />
                <Clerk.FieldError className="field-error" />
              </Clerk.Field>
              <Clerk.Field name="password" className={signinStyles.field}>
                <Clerk.Label>Password:</Clerk.Label>
                <Clerk.Input
                  placeholder="Enter your password"
                  className={signinStyles.input}
                />
                <Clerk.FieldError className="field-error" />
              </Clerk.Field>
              <SignIn.Action submit className={signinStyles.button}>
                Sign In
              </SignIn.Action>
            </SignIn.Step>
          </SignIn.Root>
          {/* </ClerkLoaded> */}
        </section>
      </main>
    </>
  );
}

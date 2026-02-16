// types/clerk.d.ts
import "@clerk/nextjs/server";

declare module "@clerk/nextjs/server" {
  // Extend the existing Clerk session claims
  interface CustomJwtSessionClaims {
    role?: string;
    plan?: string;
    // Add whatever custom claims you defined in your JWT template
  }
}

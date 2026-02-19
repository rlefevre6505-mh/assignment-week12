import { Unbounded, Raleway } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";


const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata = {
  title: "Kickabout",
  description: "Take the pressure off and make friends with Kickabout",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${raleway.className} ${unbounded.variable}`}>
        <body>
          {children}
          {/* <Footer/> */}
        </body>
      </html>
    </ClerkProvider>
  );
}

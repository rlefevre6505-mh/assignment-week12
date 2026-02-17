import { Unbounded } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
// import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata = {
  title: "Kickabout",
  description: "Take the pressure off and make friends with Kickabout",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={unbounded.variable}>
        <body>
          {children}
          {/* <Footer/> */}
        </body>
      </html>
    </ClerkProvider>
  );
}

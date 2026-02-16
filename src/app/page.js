import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/sign-up">sign up</Link>
      <Link href="/sign-in">sign in</Link>
    </div>
  );
}

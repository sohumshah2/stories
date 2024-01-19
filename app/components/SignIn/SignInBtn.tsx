"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInBtn() {
  const { status, data: session } = useSession();

  return status === "authenticated" ? (
    <Image
      onClick={() => signOut()}
      className="rounded-full"
      src={session?.user?.image || ""}
      alt="profile picture"
      width={60}
      height={60}
      style={{ cursor: "pointer" }}
      title="Click to sign out"
    />
  ) : (
    <button onClick={() => signIn("google")} className="rounded-full">
      <Image src="/google-logo.png" height={30} width={30} alt="Google logo" />
    </button>
  );
}

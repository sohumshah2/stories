"use client";

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// (Barebones atm) about page
export default function Home() {
  const session = useSession();
  const router = useRouter();

  if (session.data) {
    router.push("/stories");
  }

  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "http://localhost:3000/stories" });
  };

  return (
    <div>
      <button onClick={handleSignIn} className="rounded-full">
        <Image
          src="/google-logo.png"
          height={30}
          width={30}
          alt="Google logo"
        />
      </button>
    </div>
  );
}

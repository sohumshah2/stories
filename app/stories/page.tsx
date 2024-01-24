"use client";

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Stories page
export default function Home() {
  return (
    <div>
      <h1>Stories</h1>
    </div>
  );
}

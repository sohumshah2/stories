"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Story } from "../components/storyType";
import StoryBox from "../components/StoryBox";

// Stories page
export default function Home() {
  const [stories, setStories] = useState<Story[]>([]);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading") {
      if (status === "unauthenticated") {
        router.push("/");
      }
      console.log("status", status, session);
      getStoryMetadata();
    }
  }, [status]);

  // this is reused elsewhere; TODO: move to a helper function
  const getStoryMetadata = async () => {
    try {
      const url = `http://localhost:3000/api/stories?author=${encodeURIComponent(
        session?.user?.email || ""
      )}`;
      console.log("url", url);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
      });
      if (!res.ok) {
        console.log("Error getting story metadata");
      }
      const data = await res.json();
      setStories(data.stories);
      console.log("data", data);
      console.log("stories", stories, Array.isArray(stories));
    } catch (error) {
      console.log("Error getting story metadata", error);
    }
  };

  return (
    <div>
      <h1>Stories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(stories) ? (
          stories.map((story) => <StoryBox key={story._id} story={story} />)
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}

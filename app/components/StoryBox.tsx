// components/StoryBox.tsx
import Link from "next/link";
import { Story } from "./storyType";

const StoryBox: React.FC<{ story: Story }> = ({ story }) => {
  return (
    <div>
      <Link
        href={{
          pathname: "/editor",
          query: { id: story._id },
        }}
      >
        <img
          src={story.imageSrc}
          alt={story.name}
          style={{ width: "100%", height: "150px", objectFit: "cover" }}
        />
        <p className="mt-2 text-center">{story.name}</p>
      </Link>
    </div>
  );
};

export default StoryBox;

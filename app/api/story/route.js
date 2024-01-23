import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Story from "../../../models/story.ts";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    await connectMongoDB();
    // TODO: move this reused code to a helper function
    // Check if an authorization token was provided in the header
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json(
        { message: "Token is missing." },
        { status: 401 }
      );
    }

    // Check if the author query parameter was provided
    const url = new URL(request.url);
    const queryParams = url.searchParams;

    if (!queryParams.has("author")) {
      return NextResponse.json(
        {
          message: "Missing author query parameter.",
        },
        { status: 400 }
      );
    }

    if (!queryParams.has("story")) {
      return NextResponse.json(
        {
          message: "Missing story query parameter.",
        },
        { status: 400 }
      );
    }

    const author = queryParams.get("author");
    const story = queryParams.get("story");

    // Verify the JWT token
    const secret = process.env.JWT_SECRET;
    try {
      const decoded = jwt.verify(token, secret);
      const { email } = decoded;

      // Compare the email from the token with the provided author's email
      if (email !== author) {
        return NextResponse.json(
          { message: "Token email does not match the provided author." },
          { status: 403 }
        );
      }
    } catch (verifyError) {
      console.error("Error verifying JWT token", verifyError);
      return NextResponse.json({ message: "Invalid token." }, { status: 403 });
    }

    // Now get the story contents
    const contents = await Story.find({ author, name: story }).select(
      "contents"
    );

    if (!contents || contents.length === 0) {
      return NextResponse.json(
        { message: "Story not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ contents: contents[0] }, { status: 200 });
  } catch (error) {
    console.error("Error getting stories", error);
    return NextResponse.error({
      message: "Failed to get stories.",
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    await connectMongoDB();
    console.log("got here1");

    const { name, contents, author, dateCreated, dateLastModified, imageSrc } =
      await request.json();

    console.log("got here2");

    // Check if an authorization token was provided in the header
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json(
        { message: "Token is missing." },
        { status: 401 }
      );
    }
    // Verify the JWT token
    const secret = process.env.JWT_SECRET;
    try {
      const decoded = jwt.verify(token, secret);
      const { email } = decoded;

      // Compare the email from the token with the provided author's email
      if (email !== author) {
        return NextResponse.json(
          { message: "Token email does not match the provided author." },
          { status: 403 }
        );
      }

      // Check if a story with the same name and author already exists
      const existingStory = await Story.findOne({
        name,
        author,
      });

      if (existingStory) {
        // If it exists, update the contents and dateLastModified
        await Story.findOneAndUpdate(
          { name, author },
          {
            $set: {
              contents,
              dateLastModified,
              imageSrc,
            },
          }
        );
        return NextResponse.json({ message: "Story updated" }, { status: 200 });
      } else {
        // If it doesn't exist, create a new story
        console.log("got here");

        console.log("img src", imageSrc);
        await Story.create({
          name,
          contents,
          author,
          dateCreated,
          dateLastModified,
          imageSrc,
        });
        return NextResponse.json({ message: "Story saved" }, { status: 201 });
      }
    } catch (verifyError) {
      console.error("Error verifying JWT token", verifyError);
      return NextResponse.json({ message: "Invalid token." }, { status: 403 });
    }
  } catch (error) {
    console.error("Error creating story", error);
    return NextResponse.error({
      message: "Failed to create story.",
      status: 500,
    });
  }
}

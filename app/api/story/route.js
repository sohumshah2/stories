import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Story from "../../../models/story.ts";
import jwt from "jsonwebtoken";

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

import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Story from "../../../models/story";
import jwt from "jsonwebtoken";

// {author} -> get metadata of all the stories by the author
export async function GET(request: NextRequest) {
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

    const author = queryParams.get("author");

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

    // Now get the metadata
    const stories = await Story.find({ author }, { contents: 0 });
    return NextResponse.json({ stories }, { status: 200 });
  } catch (error) {
    console.error("Error getting stories", error);
    return NextResponse.error({
      message: "Failed to get stories.",
      status: 500,
    });
  }
}

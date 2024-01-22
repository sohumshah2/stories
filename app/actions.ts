"use server";

import { getServerSession } from "next-auth";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const acceptedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

const maxFileSize = 10 * 1024 * 1024; // 5MB

export async function getSignedURL(
  type: string,
  size: number,
  checksum: string
) {
  const session = await getServerSession();
  if (!session || !session.user || !session.user.email) {
    return { failure: "Not authenticated" };
  }

  const putObjctCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: generateFileName(),
    ContentType: type,
    ContentLength: size,
    ChecksumSHA256: checksum,
  });

  if (!acceptedTypes.includes(type)) {
    console.log("type", type);
    return { failure: "Invalid file type" };
  }

  if (size > maxFileSize) {
    console.log("failed size", size);
    return { failure: "File too large" };
  }

  const signedUrl = await getSignedUrl(s3, putObjctCommand, {
    expiresIn: 60,
  });

  return { success: { url: signedUrl } };
}

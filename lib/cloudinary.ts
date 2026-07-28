import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_DOC_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function uploadDocument(file: File, folder: string, baseName: string) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const extension = file.name.split(".").pop();
  const safeBaseName = baseName.replace(/\s+/g, "_");

  return new Promise<{ secure_url: string }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "raw",
        public_id: `${Date.now()}-${safeBaseName}.${extension}`,
        use_filename: false,
        unique_filename: false,
      },
      (error, result) => {
        if (error || !result) return reject(error);
        resolve(result as { secure_url: string });
      }
    );
    uploadStream.end(buffer);
  });
}
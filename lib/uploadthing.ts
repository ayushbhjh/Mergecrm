import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  proposalAttachment: f({
    pdf: { maxFileSize: "8MB" },
    image: { maxFileSize: "8MB" },
  })
    .middleware(async () => {
      return { uploadedBy: "system" };
    })
    .onUploadComplete(async ({ file }) => {
      return { uploadedFileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

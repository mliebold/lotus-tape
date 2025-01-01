import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { GalleryImages } from "./collections/GalleryImages";
import { Shows } from "./collections/Show";
import { Music } from "./collections/Music";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, GalleryImages, Shows, Music],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    vercelBlobStorage({
      collections: {
        "gallery-images": {
          prefix: "photos/gallery",
        },
      },
      // addRandomSuffix: true, // At the time I built this, this is broken...
      // It adds the prefix to filename and causes file to not be found in blob storage
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});

import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mdtgqmhgzehepeui.public.blob.vercel-storage.com",
        port: "",
        pathname: "/photos/**",
        search: "",
      },
    ],
  },
};

export default withPayload(nextConfig);

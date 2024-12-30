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
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/gallery-images/**",
      },
      {
        protocol: "https",
        hostname: "lotus-tape.vercel.app",
        port: "",
        pathname: "/api/gallery-images/**",
      },
    ],
  },
};

export default withPayload(nextConfig);

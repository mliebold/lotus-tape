import "@/app/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import lotusImage from "@/public/lotus-tape-stage-dark.jpg";

export const metadata: Metadata = {
  title: "Lotus Tape",
  description: "Official website for Lotus Tape.",
  openGraph: {
    title: "Lotus Tape",
    description: "Official website for Lotus Tape.",
    images: [
      {
        url: lotusImage.src,
      },
    ],
    url: "https://www.lotustape.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

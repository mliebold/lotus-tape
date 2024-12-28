import Navbar from "@/components/layout/navbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar mode="Landing" />
      {children}
    </>
  );
}

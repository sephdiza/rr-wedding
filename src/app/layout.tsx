import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
// import localFont from "next/font/local";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  );
}

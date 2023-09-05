import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Walker | Software Developer",
  description:
    "Professional Software Engineer of 5 years, having a strong background in both front-end and back-end development. Committed to delivering high-quality software solutions",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}

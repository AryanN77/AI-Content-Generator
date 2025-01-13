import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TanStackProvider from "@/provider/TanStackProvider";

const roboto = Montserrat({
  subsets: ["latin"],
  weight: ["500"]
});

export const metadata: Metadata = {
  title: "AI Content Generator App",
  description: "Discover the ultimate AI Content Generator for creating high-quality, engaging, and SEO-optimized content in seconds. Perfect for blogs, social media, ads, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${roboto.className} antialiased`}
        >
          <TanStackProvider>
            {children}
          </TanStackProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

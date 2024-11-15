import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Blogform - Open source alternative to Substack",
  description: "A simple, boilerplate for you to host your blog very easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
          {/* Sidebar */}
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}

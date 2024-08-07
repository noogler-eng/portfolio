import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";


export const metadata: Metadata = {
  title: "portfolio ..",
  description: "sharad poddar's portfolio ..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-screen">
        {children}
        <Toaster/>
      </body>
    </html>
  );
}

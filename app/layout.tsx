import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// This changes the browser tab title and metadata
export const metadata: Metadata = {
  title: "Aminur Rahman Bhuiyan Tahsin | Portfolio",
  description: "Computer Science & Engineering student and software developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Moving the background colors to the body tag fixes the white edges */}
      <body className={`${inter.className} bg-white text-zinc-900 selection:bg-emerald-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
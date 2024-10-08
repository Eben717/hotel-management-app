import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: "--font-poppins"});

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover the best hotel room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Hotel Management App</title>
      <body className={poppins.className}>
        <main className="font-normal">
          {/* ?Header */}
          {children}
          {/* ?Footer */}
        </main>
      </body>
    </html>
  );
}

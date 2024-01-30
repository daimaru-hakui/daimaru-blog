import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUIProviders from "@/providers/nextui-provider";
import NavbarArea from "@/components/header/nav-bar-area";
import SessionProvider from "@/providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

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
    <SessionProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-100  `}>
          <NextUIProviders>
            <div className="flex min-h-screen flex-col items-center justify-between">
              <NavbarArea />
              {children}
            </div>
          </NextUIProviders>
        </body>
      </html>
    </SessionProvider>
  );
}
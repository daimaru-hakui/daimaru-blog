import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUIProviders from "@/providers/nextui-provider";
import NavbarArea from "@/components/header/nav-bar-area";
import SessionProvider from "@/providers/session-provider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "大丸白衣ブログ",
  description: "大丸白衣ブログ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <SessionProvider>
      <html lang="ja">
        <body className={`${inter.className} bg-gray-100  `}>
          <NextUIProviders>
            <div className="w-full px-3 md:px-6 flex min-h-screen flex-col items-center ">
              {session && <NavbarArea />}
              <div className="mt-6 md:mt-12 w-full">{children}</div>
            </div>
          </NextUIProviders>
        </body>
      </html>
    </SessionProvider>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReactQwen",
  description: "AI-Powered Code and components Generation and Debugging webstie for React and tailwind ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased custom-scrollbar`}
      >
        <main  className="overflow-hidden  "> 
          <ReduxProvider>
         {children}
         </ReduxProvider>
        </main>         
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkedin",
  description: "A developer friendly app to connect all professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar/>

        <div className="flex-1 w-full">
          <main className="max-w-6xl mx-auto">
    
            {children}
          </main>
        </div>
       </body>
    </html>
    </ClerkProvider>
  );
}

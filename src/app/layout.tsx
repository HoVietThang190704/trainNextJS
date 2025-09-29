import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/features/navbar";
import { Footer } from "@/features/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furnimart - Modern Furniture Store",
  description: "Discover beautiful and modern furniture for your home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Emine Gülbahar Akay | Portfolio",
  description: "Data Scientist & Data Analyst & Business Analyst",
  keywords: "data science, data analysis, business analysis, portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#1a1a2e] via-[#2d2b55] to-[#1a1a2e]">
        <div className="min-h-screen flex flex-col">
          {/* Main Content */}
          <main className="flex-1">
            {/* Navigation Links */}
            <div className="flex justify-center items-center space-x-8 py-4">
              <Link href="/" className="text-white hover:text-purple-300 transition">Home</Link>
              <Link href="/about" className="text-white hover:text-purple-300 transition">About</Link>
              <Link href="/projects" className="text-white hover:text-purple-300 transition">Projects</Link>
              <Link href="/contact" className="text-white hover:text-purple-300 transition">Contact</Link>
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

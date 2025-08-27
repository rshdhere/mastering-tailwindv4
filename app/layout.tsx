import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";


export const metadata: Metadata = {
  title: "Finta AI",
  description: "one solution for accounting and taxes",
  icons: {
    icon: '/icon.svg'
  }
};

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

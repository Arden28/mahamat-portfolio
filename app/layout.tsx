import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhD. MAHAMAT ADOUM ABDOULAYE · Portfolio",
  description: "Energy & Petroleum Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/mahamat.jpg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

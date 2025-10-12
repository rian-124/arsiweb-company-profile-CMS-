
import type { Metadata } from "next";
import { Anta, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/site/home/header/Header";
import Navbar from "./components/site/layout/navbar/Navbar";
import Footer from "./components/site/layout/Footer/Footer";
import Sidebar from "./components/site/layout/sidebar/Sidebar";

const anta = Anta({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anta",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arsiweb",
  description: "It enterprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${anta.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="main-content">
          <Header />
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
           <Footer />
        </div>
          <Sidebar />
      </body>
    </html>
  );
}

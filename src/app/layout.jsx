import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BSides SWFL 2025- Get Your Tickets Now!",
  description: "For the BSides SWFL 2025 cybersecurity conference.",
  icons: {
    icon: "icon.ico",
    shortcut: "icon.ico",
    apple: "icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-amber-50 via-orange-50 to-red-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

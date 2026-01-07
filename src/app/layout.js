import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Unnity — Digital Marketing & Development",
  description:
    "Performance marketing on Meta & Google, Shopify/Next.js builds, and brand identity. Let Unnity unlock your growth.",
  verification: {
    google: "vn1NyNfjfHshQLVwVfvgNQXQUCVzrHmKmNFja9489XE", // your verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

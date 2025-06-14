import type { Metadata } from "next";
import { Raleway} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/elements/Header";
import { Footer } from "@/components/elements/Footer";

const geistSans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Tolk By Example",
  description: "Learn Tolk in Y Minutes by Examples.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

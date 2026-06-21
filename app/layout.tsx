import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsBanner from "@/components/TermsBanner";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "מכללת אמביציות | עדנה מימון - NLP, סדנאות, אימון אישי",
  description:
    "מכללת אמביציות של עדנה מימון - קורס NLP, סדנאות שליטה בכעסים, שיפור ביטחון עצמי, אימון אישי. שינוי חיים בשיטות מוכחות.",
  keywords:
    "NLP, שליטה בכעסים, ביטחון עצמי, סדנאות, קורס NLP, אימון אישי, עדנה מימון, מכללת אמביציות",
  openGraph: {
    title: "מכללת אמביציות | עדנה מימון",
    description: "קורסים, סדנאות ואימון אישי לשינוי חיים",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-dark">
        <TermsBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

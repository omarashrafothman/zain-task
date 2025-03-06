import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header.jsx";
import Footer from "@/components/footer/Footer";


const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "600", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

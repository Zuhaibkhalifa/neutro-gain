import Head from "next/head";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubic = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-rubic",
});

export const metadata = {
  title: "NeutroGain",
  description: "NeutroGain is a platform to verify the authenticity of your supplements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
      <body className={`${rubic.variable}`}>{children}</body>
    </html>
  );
}

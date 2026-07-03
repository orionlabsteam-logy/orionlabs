import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OrionLabs | Launch Your Tech Career with Project-Based Internships",
  description:
    "Bridge the gap between academic learning and real-world experience. Join OrionLabs for project-based internships in AI, Machine Learning, Data Science, Web & App Development with expert mentorship and career certification.",
  keywords: [
    "Internships",
    "Tech Internships",
    "OrionLabs",
    "Project-based learning",
    "AI internships",
    "Web development internships",
    "Software engineering internships",
    "Mentorship programs",
    "Career certification",
  ],
  authors: [{ name: "OrionLabs" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900 font-sans flex flex-col overflow-x-hidden scroll-smooth">
        {children}
      </body>
    </html>
  );
}

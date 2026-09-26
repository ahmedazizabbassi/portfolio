import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aziz | Software Engineer",
  description: "Software Engineer | Cyber Security Enthusiast | Open Source Contributor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Aziz | Software Engineer</title>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const preference = localStorage.getItem('theme') || 'system';
              const isDark = preference === 'dark' ||
                (preference === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
              document.documentElement.classList.toggle('dark', isDark);
            })();`,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Joseph Omoruwou — Software + Systems Engineering",
  description: "Software and systems engineering shown through working evidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}

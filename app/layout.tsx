import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virlix Media | Next Gen Media Agency",
  description:
    "Virlix Media is a next-generation media agency helping brands grow through influencer marketing, creator campaigns, content production, social media, and brand strategy.",
 icons: {
  icon: "/logo.png",
  shortcut: "/logo.png",
  apple: "/logo.png",
},
    keywords: [
    "Virlix Media",
    "influencer marketing agency",
    "creator marketing",
    "social media marketing",
    "content production",
    "brand strategy",
    "digital marketing agency",
  ],
  authors: [{ name: "Virlix Media" }],
  creator: "Virlix Media",

  openGraph: {
    title: "Virlix Media | Helping Brands Go Viral",
    description:
      "Influencer marketing, creator campaigns, content production, and brand growth.",
    siteName: "Virlix Media",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Virlix Media | Next Gen Media Agency",
    description:
      "Helping ambitious brands connect with creators, create powerful content, and grow.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
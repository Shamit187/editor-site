import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";

const ubuntu = Ubuntu({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Journa",
  description:
    "Site for uploading content for my note site, blog site and gallery site",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo_white.svg",
        href: "/logo_white.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo_black.svg",
        href: "/logo_black.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

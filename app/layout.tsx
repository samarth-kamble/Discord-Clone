import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord",
  description:
    "Discord is a voice, video and text communication service to talk and hang out with your friends and communities.",
  icons: {
    icon: "./logo.png ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "./discord-logo.svg",
        },
        variables: {
          colorBackground: "#15171c",
          colorPrimary: "",
          colorText: "white",
          colorInputBackground: "#1b1f29",
          colorInputText: "white",
        },
      }}
    >
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Akshat Ajmera | Spotify Resume",
  description: "Sophomore at BITS Pilani Hyderabad | Software Developer",
  icons: {
    icon: "/aa.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className="antialiased bg-gradient-to-b from-[#10291a] via-[#0e1c13] to-[#0a0a0a] min-h-screen">
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}

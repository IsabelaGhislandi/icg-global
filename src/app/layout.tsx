import type { Metadata, Viewport } from "next";
import "./globals.css";
import { VideoBackground } from "../components/Background/VideoBackground";

export const metadata: Metadata = {
  title: "I.C.G. Global",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <VideoBackground />
        
        {children}
      </body>
    </html>
  );
}
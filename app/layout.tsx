import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Robotics",
  description:
    "A robotics learning path with curriculum milestones, trusted resources, and follow-along projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-950 antialiased">{children}</body>
    </html>
  );
}

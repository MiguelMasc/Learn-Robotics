import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Learn Robotics — Find your way into robotics",
    template: "%s · Learn Robotics",
  },
  description:
    "Explore robotics from high school foundations to master’s-level research. Find connected subjects, prerequisites, free resources and practical projects.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}

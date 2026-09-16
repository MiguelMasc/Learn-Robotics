import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Learn Robotics — Find your way into robotics",
    template: "%s · Learn Robotics",
  },
  description:
    "Explore the connected subjects of robotics. Find free learning resources, understand the research, and discover something to build.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

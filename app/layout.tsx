import type { Metadata } from "next";
import ThemeProvider from "@/theme/theme-provider";

export const metadata: Metadata = {
  title: "Social Seal",
  description: "Test Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Referral Hub",
  description: "Referral Hub frontend development challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-screen w-screen overflow-hidden bg-[#F5F7FA] dark:bg-[#1A1D21]">
            {children}
          </main>

          <div className="fixed bottom-4 left-4 w-fit h-fit">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

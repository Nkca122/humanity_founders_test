import type { Metadata } from "next";
import PlatFormLayout from "@/components/platform-layout";

export const metadata: Metadata = {
  title: "Referral Hub | Kadin UI",
  description: "A demonstration for demonstrating frontend development progress by Nikunj Chauhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PlatFormLayout>{children}</PlatFormLayout>;
}

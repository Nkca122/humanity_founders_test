
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Referral Hub | Credentials",
  description: "Demonstration of form handling by Nikunj Chauhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex place-content-center place-items-center relative overflow-x-hidden overflow-y-scroll">
      <div className="absolute h-full w-full flex flex-col justify-center items-center z-0">
        <div className="flex-1 w-full relative">
          <Image src="/assets/Login01.png" fill alt="" />
        </div>
        <div className="flex-1 w-full relative">
          <Image src="/assets/Login02.png" fill alt="" />
        </div>
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
}

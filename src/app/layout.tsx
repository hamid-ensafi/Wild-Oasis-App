import type { Metadata } from "next";
import "@/styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    template: "The Wild Oasis %s",
    default: " Welcome The Wild Oasis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-900 text-primary-100 min-h-screen`}
      >
        <Header />
        <main className="flex w-full justify-center py-12">
          <div className="2xl:container w-full flex justify-center ">
            <div className="w-10/12">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}

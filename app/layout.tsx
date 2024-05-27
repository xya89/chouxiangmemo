import type { Metadata } from "next";
import { ClientBar } from "./component/clientBar";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: '说的道理',
    template: '%s',
  },
  description: "shuo de dao li",
  openGraph: {
    title: '抽象',
    description: '阿米浴说的道理',
    siteName: 'chouxiang memo',
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en"
      className="text-black bg-white dark:text-white dark:bg-black">
      <body className="antialiased max-w flex">
        <ClientBar />
        <main className="flex-auto min-w-0 mt-20 mx-4 lg:ml-60 md:ml-60 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}

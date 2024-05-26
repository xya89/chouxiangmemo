import type { Metadata } from "next";
import { Navbar } from "./component/navBar";
import { Sidebar } from "./component/sideBar";
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
        <Navbar />
        <main className="flex-auto min-w-0 mt-20 mx-4 lg:ml-72 flex flex-col px-2 md:px-0">
          {children}
          {/* Footer */}
        </main>
      </body>
    </html>
  );
}

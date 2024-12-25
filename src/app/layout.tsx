import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/navigation/Footer";
import ToastProvider from "@/providers/ToastProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Saint Ministry International",
  description:
    "A blog application for documenting the journey of saint ministry international and wordcity. It includes the documentaion of the sermons, songs, articles, e.t.c.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col">
          <div className="min-h-[80%]">
            <ReactQueryProvider>
              <ToastProvider>
                {children}
                </ToastProvider>
            </ReactQueryProvider>
          </div>
          <div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}

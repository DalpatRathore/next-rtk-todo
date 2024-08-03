import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/providers";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header></Header>
            {children}
            <Footer></Footer>
          </ThemeProvider>
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}

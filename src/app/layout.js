import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Online",
  description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

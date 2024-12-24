import "../../../globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import SellerMain from "@/components/layouts/seller/SellerMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AFFRIVA",
  description: "AFFRIVA",
};

export default function SellerLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Toaster position="top-center" richColors />

        <SellerMain>{children}</SellerMain>
      </body>
    </html>
  );
}

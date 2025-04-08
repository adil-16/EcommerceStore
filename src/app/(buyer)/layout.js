import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CustomToaster from "@/utils/CustomToaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Online",
  description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <CustomToaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}

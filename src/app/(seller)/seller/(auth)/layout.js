import "../../../globals.css";
import Carousel from "../../../../components/sections/seller/auth/Carousel";

import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const Login1 = "/images/login-1.png";
const Login2 = "/images/login-2.png";
const Login3 = "/images/login-3.png";

const importedImages = [Login1, Login2, Login3];

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AFFRIVA",
  description: "AFFRIVA",
};

export default function SellerAuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Toaster position="top-center" richColors />
        <div className="flex gap-5 items-center justify-center">
          <div className="w-full lg:w-1/2">{children}</div>
          {/* <AppProvider>{children}</AppProvider> */}
          <div className="w-1/2 lg:block hidden my-auto">
            <Carousel img={importedImages} />
          </div>
        </div>
      </body>
    </html>
  );
}

import Link from "next/link";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"], weight:["400", "500", "600", "700"]
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "CourtneyFann Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        
        {/*page content*/}
        <main stype={{ }}>{children}</main> 
      </body>
    </html>
  );
}

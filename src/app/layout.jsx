import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/footer";
import NavComponent from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neowyze Challenge",
  description: "FrontEnd development challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavComponent />
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}

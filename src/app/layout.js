import { Inter } from "next/font/google";
import "./globals.css";
import LayoutComponent from  "@/components/LayoutComponent"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deliver Food To Your Door Step!",
  description:
    "Authentic food, Quick Service, Fast Delivery appliction with providing the best delivary services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EEEFF0]`}>
          <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}

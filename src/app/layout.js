import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Plant Care",
  description: "A watering plant reminder app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} text-black font-poppins bg-gradient-to-r from-background to-background/45  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

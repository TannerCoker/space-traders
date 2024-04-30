import { Kode_Mono } from "next/font/google";
import "../styles/globals.css";

const kodemono = Kode_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Space Traders",
  description: "A GUI to play the space traders game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kodemono.className}>{children}</body>
    </html>
  );
}

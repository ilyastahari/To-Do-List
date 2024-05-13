import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121212] text-white container mx-auto p-4`}>
        <div className="flex justify-center items-center min-h-screen">{children}</div>
      </body>
    </html>
  )
}
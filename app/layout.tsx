import "./globals.css";
import "@assets/tooltip.scss";
import { Inter } from "next/font/google";
import "@/src/assets/fontawesome/css/all.css";
import Sidebar from "@/core/layout/Sidebar";
import ReduxProvider from "@/src/contexts/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-1">
          <ReduxProvider>
            <Sidebar />
            {children}
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}

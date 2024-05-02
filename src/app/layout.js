import { dbConnect } from "@/backend/db/connectDb";
import Header from "@/components/landing/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./provider/AuthProvider";
import ToastProvider from "./provider/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana Khazana - Home",
  description: "The best Indian food in town",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToastProvider>
            <Header />
            <main>
              {children}
            </main>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

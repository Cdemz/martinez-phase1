import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martinez Landscaping LLC",
  description: "Constructing the Future with Banks Concrete",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <NavBar />
        </section>
        {children}
        <section>
          <Footer />
        </section>
      </body>
    </html>
  );
}

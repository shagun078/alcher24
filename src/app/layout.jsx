import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alcheringa",
  description: "Alcheringa is the annual cultural festival of the Indian Institute of Technology (IIT), Guwahati. Started in 1996 by a group of students, Alcheringa, IIT Guwahati has become one of Asia’s most significant college-level cultural events. Spread over three days and four nights, Alcheringa attracts people from all over the world with its spectacular events and competitions."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

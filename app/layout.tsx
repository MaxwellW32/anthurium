import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthurium Software Solutions",
  description: "Generated by the best",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav menuInfoArr={[
          {
            title: "Home",
            link: "/",
            subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]
          },
          {
            title: "Services",
            link: "/services",
            subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]

          }, {
            title: "Testimonials",
            link: "/testimonials",
            subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]


          },
          {
            title: "Blog",
            link: "/blog",
            subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]

          },
          {
            title: "Portfolio",
            link: "/Portfolio",
            subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]

          },
          {
            title: "FAQ",
            link: "/FAQ",
            subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]

          },
          {
            title: "Contact",
            link: "/contact",
            subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]

          },
        ]}
        />
        {children}
      </body>
    </html>
  );
}

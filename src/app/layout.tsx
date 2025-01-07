import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stuart Bell - Portfolio",
  description: "Expert Bubble Developer | Product Manager | Athlete",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <main>{children}</main>
          
          <footer className="border-t border-border/40">
            <div className="container mx-auto max-w-7xl px-6 py-8 text-center text-sm text-muted-foreground">
              <div className="mb-2">
                <a href="mailto:stuartbell3011@gmail.com" className="hover:text-foreground transition-colors">
                  stuartbell3011@gmail.com
                </a>
              </div>
              &copy; {new Date().getFullYear()} Stuart. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

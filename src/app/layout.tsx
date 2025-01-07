'use client';

import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-background">
          {/* Header temporarily removed
          <header
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <div
              className="container flex h-16 items-center justify-between"
            >
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-2xl">
                  Stuart
                </span>
              </Link>

              {/* Mobile menu button */}
              {/* <Button
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <SunIcon /> : <SunIcon />}
              </Button> */}

              {/* Desktop navigation */}
              {/* <nav className="hidden md:flex items-center space-x-6">
                <Link href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link href="/portfolio"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfolio
                </Link>
                <Link href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <Link href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
                <Link href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
                <ModeToggle />
              </nav>
            </div>

            {/* Mobile menu */}
            {/* {isMenuOpen && (
              <div className="md:hidden border-t border-border/40">
                <nav className="flex flex-col space-y-4 p-4">
                  <Link href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                  <Link href="/portfolio"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Portfolio
                  </Link>
                  <Link href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                  <Link href="/blog"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                  <Link href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                  <ModeToggle />
                </nav>
              </div>
            )}
          </header>
          */}
          <main>{children}</main>

          <footer className="border-t border-border/40">
            <div
              className="container mx-auto max-w-7xl px-6 py-8 text-center text-sm text-muted-foreground"
            >
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

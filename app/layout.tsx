import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Docs - Polícia Federal",
    template: `%s - Polícia Federal`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen overflow-hidden">
            <Navbar />
            
            <main className="flex-1 overflow-hidden flex flex-col w-full">
              {children}
            </main>

            <footer className="w-full flex items-center justify-center py-3 shrink-0 border-t border-default-50">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://pflegacy.xyz"
                title="Site Oficial da Polícia Federal - Legacy RP"
              >
                <span className="text-default-400 text-xs">Powered by</span>
                <p className="text-default-500 text-xs font-black">Polícia Federal</p>
                <hr className="w-px h-4 bg-default-400 mx-2" />
                <Image src="/lgc.png" alt="Legacy RP Logo" width={70} height={70} className="object-contain opacity-60" />
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
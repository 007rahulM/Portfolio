import type { Metadata } from "next";
import "./globals.css";
import { sansFont, monoFont } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { BackToTop } from "@/components/shared/back-to-top";

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulm-portfolio.vercel.app"),
  title: {
    default: "Rahul M | Backend Engineer",
    template: "%s | Rahul M",
  },
  description:
    "Backend engineer who architects APIs, integrates AI, and is becoming a full-stack developer one component at a time.",
  openGraph: {
    title: "Rahul M | Portfolio",
    description:
      "Backend engineer who architects APIs, integrates AI, and is becoming a full-stack developer.",
    images: ["/og-default.svg"],
    type: "website",
  },
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('rm-theme');
    var preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var theme = stored || preferred;
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sansFont.variable} ${monoFont.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ScrollProgress />
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 md:px-6">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

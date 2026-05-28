import localFont from "next/font/local";

export const sansFont = localFont({
  src: "../app/inter-latin.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

export const monoFont = localFont({
  src: [
    { path: "../app/jetbrains-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../app/jetbrains-mono-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

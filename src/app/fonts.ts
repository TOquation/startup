import {
  Caveat,
  Great_Vibes,
  Inter,
  Nunito,
  Roboto_Mono,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const great_vibes = Great_Vibes({
  variable: "--font-great_vibes",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

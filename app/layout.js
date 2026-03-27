import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const siteUrl = "https://homeowner-checklist.vercel.app";

export const metadata = {
  title: "Getting Your Home Ready for Photo Day | Envision Media LA",
  description:
    "A simple, step-by-step guide to getting your home photo-ready. A clean, decluttered home sells faster and for more money — here's exactly what to do before we arrive!",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Getting Your Home Ready for Photo Day",
    description:
      "A clean, decluttered home sells faster and for more money. Here's exactly what to do before your photo shoot!",
    url: siteUrl,
    siteName: "Envision Media LA",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Beautiful clean home interior ready for photos",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Your Home Ready for Photo Day",
    description:
      "A clean, decluttered home sells faster and for more money. Here's exactly what to do before your photo shoot!",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=630&fit=crop&q=80",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

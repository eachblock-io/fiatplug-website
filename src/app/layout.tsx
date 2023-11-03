import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import "animate.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fiatplug",
  description: "Instant cash for gift cards & crypto exchange",
  openGraph: {
    type: "website",
    url: "https://res.cloudinary.com/calebcloud/image/upload/v1698926769/e07a6bq5w0wckneffkxk.png",
    title: "Fiatplug",
    description: "Instant cash for gift cards & crypto exchange",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1698926769/e07a6bq5w0wckneffkxk.png",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiatplug",
    description: "Instant cash for gift cards & crypto exchange",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1698926769/e07a6bq5w0wckneffkxk.png",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        src="//code.tidio.co/aeygamh3zbkw5hp6ox1uqmnaveo2fu3g.js"
        async></script>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

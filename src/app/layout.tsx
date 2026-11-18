import type { Metadata } from "next";
import { Poppins, Lato, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acceleratefinancial.com.au"),
  title: "Accelerate Financial – Smart Finance Solutions For Your Future",
  description:
    "Tailored mortgage, vehicle, and business loans with competitive rates and expert advice to reach your goals faster.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Accelerate Financial – Smart Finance Solutions For Your Future",
    description:
      "Tailored mortgage, vehicle, and business loans with competitive rates and expert advice to reach your goals faster.",
    url: "/",
    images: ["/images/busy-working-cafe-slider.jpg"],
  },
  verification: {
    google: "82mJCJCKvrJz-xs_BfF3cg14mg7fe27ObB2AA7NOx2s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lato.variable} ${openSans.variable} scroll-smooth`}
    >
      <head>
        {/* Google Tag (gtm.js) - Exact container script for GTM-TK5PG59S */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-TK5PG59S"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-[#333333] bg-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TK5PG59S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

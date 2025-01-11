import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitFusion - Plataforma de Treinos e Bem-Estar",
  description:
    "FitFusion é a solução ideal para academias, personal trainers e usuários que buscam treinos personalizados e bem-estar com tecnologia avançada.",
  keywords: [
    "treinos personalizados",
    "bem-estar",
    "gestão de academias",
    "FitFusion",
    "Fit",
    "Fusion",
    "plataforma fitness",
    "Treinos",
    "como treinar",
    "inteligencia artificial",
    "academia",
    "Dietas",
    "Dieta",
    "Dieta personalizada",
    "criar dieta",
    "achar dieta",
    "tecnologia para academias",
    "plataforma de treinos",
    "exercícios fitness",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "FitFusion - Plataforma de Treinos e Bem-Estar",
    description:
      "Descubra FitFusion, a plataforma ideal para otimizar treinos, gestão de academias e bem-estar com tecnologia avançada.",
    siteName: "FitFusion",
    images: [
      {
        url: "/twitter.ico", 
        width: 1200,
        height: 630,
        alt: "FitFusion - Plataforma de Treinos e Bem-Estar",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitFusion - Plataforma de Treinos e Bem-Estar",
    description:
      "Treinos personalizados e gestão de academias com a plataforma FitFusion. Otimize o bem-estar com tecnologia avançada.",
    images: ["/twitter.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="treinos personalizados, bem-estar, gestão de academias, FitFusion, plataforma fitness, personal trainer online, treino em casa, tecnologia para academias"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="author"
          content="FitFusion - Plataforma de Treinos e Bem-Estar"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="FitFusion" />
        <meta property="og:title" content="FitFusion - Plataforma de Treinos" />
        <meta
          property="og:description"
          content="Descubra FitFusion, a solução ideal para treinos personalizados, gestão de academias e bem-estar."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:alt" content="FitFusion - Plataforma de Treinos e Bem-Estar" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FitFusion - Plataforma de Treinos" />
        <meta
          name="twitter:description"
          content="Treinos personalizados e gestão de academias com a plataforma FitFusion. Otimize o bem-estar com tecnologia avançada."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:creator" content="@fitfusion" />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

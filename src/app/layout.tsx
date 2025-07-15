import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importa a fonte padrão 'Inter'
import "./globals.css";

// Inicializa a fonte Inter
const inter = Inter({ subsets: ["latin"] });

// Aproveitei para melhorar os metadados do seu site
export const metadata: Metadata = {
  title: "Cult of the Magi - Blog",
  description: "Um blog sobre os mistérios da magia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Aproveitei para mudar a língua para português
    <html lang="pt-BR">
      {/* Aplica a classe da fonte diretamente no body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
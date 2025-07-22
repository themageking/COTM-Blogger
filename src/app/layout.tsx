import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// --- Fonte para TÍTULOS ---
const awesome = localFont({
	src: [
		{
			path: "../fonts/awesome/AwesomeSerif-BoldExtraTall.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../fonts/awesome/AwesomeSerif-ExtraTall.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/awesome/AwesomeSerifItalic-BdExraTall.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "../fonts/awesome/AwesomeSerifItalic-ExtraTall.woff2",
			weight: "400",
			style: "italic",
		},
	],
	variable: "--font-awesome",
});

// --- Fonte para TEXTO ---
const editorial = localFont({
	src: [
		{
			path: "../fonts/editorialtoday/EditorialToday-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/editorialtoday/EditorialToday-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../fonts/editorialtoday/EditorialToday-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../fonts/editorialtoday/EditorialToday-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-editorial",
});

export const metadata: Metadata = {
	title: "Cult of the Magi - Blog",
	description: "Um blog sobre os mistérios da magia.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			{/* Aplica as DUAS variáveis de fonte no body */}
			<body className={`${awesome.variable} ${editorial.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}

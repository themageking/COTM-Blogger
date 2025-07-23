import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";

const SmoothScrollHandler = dynamic(
	() => import("../components/SmoothScrollHandler"),
	{ ssr: false },
);

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
			<body className={`${awesome.variable} ${editorial.variable} antialiased`}>
				{children}
				{/* o SmoothScrollHandler só roda no browser */}
				<SmoothScrollHandler />
			</body>
		</html>
	);
}

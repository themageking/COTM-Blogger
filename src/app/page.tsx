// /workspaces/cultofthemagi-blog/src/app/page.tsx
import { redirect } from "next/navigation";

export default function HomePage() {
	// Esta função redireciona permanentemente qualquer visitante
	// da rota '/' para a rota '/blog'
	redirect("/blog");

	// Como o redirecionamento acontece no servidor, nada abaixo dele
	// (nem um return com JSX) será renderizado ou enviado ao cliente.
}

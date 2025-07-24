import Image from "next/image"; // Importe o componente Image do Next.js
import Link from "next/link";

interface Author {
	name: string;
	picture: string; // O caminho da imagem do autor
}

interface BlogPostCardProps {
	slug: string;
	title: string;
	summary: string;
	date: string;
	author: Author; // Adicionamos a propriedade author aqui
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
	slug,
	title,
	summary,
	date,
	author, // Desestruturamos o author aqui
}) => {
	const formatteDate = new Date(date).toLocaleDateString("pt-BR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	});

	return (
		<li className="p-4 border border-gray-200 rounded-sm transition-colors bg-gray-100 hover:bg-gray-50">
			<Link href={`/blog/${slug}`} className="block">
				{/* Título */}
				<h2 className="m-0 my-2">{title}</h2>

				{/* Resumo */}
				<p className="text-gray-700 mt-2">{summary}</p>

				{/* Informações do Autor e Data - Agrupadas no final */}
				<div className="flex items-center mt-4">
					{/* Imagem do Autor */}
					{author.picture && (
						<Image
							src={author.picture}
							alt={`Foto de perfil de ${author.name}`}
							width={32} // Defina a largura da imagem
							height={32} // Defina a altura da imagem
							className="rounded-full mr-2" // Adicione estilos para arredondar e espaçar
						/>
					)}
					{/* Nome do Autor e Data */}
					<p className="text-sm text-gray-600">
						{author.name} •{" "}
						<time dateTime={date} className="text-sm text-gray-500">
							{formatteDate}
						</time>
					</p>
				</div>
			</Link>
		</li>
	);
};

export default BlogPostCard;

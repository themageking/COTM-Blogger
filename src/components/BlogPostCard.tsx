// src/components/BlogPostCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types";

interface BlogPostCardProps {
	post: Post;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
	const { slug, title, summary, date, author } = post;

	const formatteDate = new Date(date).toLocaleDateString("pt-BR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	});

	return (
		<li className="p-4 border ...">
			<Link href={`/blog/${slug}`} className="block">
				<h2 className="m-0 my-2">{title}</h2>
				<p className="text-gray-700 mt-2">{summary}</p>
				<div className="flex items-center mt-4">
					{author.picture && (
						<Image
							src={author.picture}
							alt={`Foto de ${author.name}`}
							width={32}
							height={32}
							className="rounded-full mr-2"
						/>
					)}
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

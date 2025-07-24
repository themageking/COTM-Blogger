// src/components/PostList.tsx
"use client";

import { useSearch } from "@/hooks/useSearch";
import type { Post } from "@/types";
import BlogPostCard from "./BlogPostCard";

interface PostListProps {
	posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
	const { searchTerm, setSearchTerm, filteredItems } = useSearch(posts, [
		"title",
		"summary",
	]);

	return (
		<div>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder="Pesquisar artigos..."
				className="w-full p-3 mb-8 border border-gray-200 rounded-sm ..."
			/>

			<ul className="space-y-4">
				{filteredItems.length > 0 ? (
					filteredItems.map((post) => (
						<BlogPostCard key={post.slug} post={post} />
					))
				) : (
					<p className="text-gray-400">Nenhum artigo encontrado.</p>
				)}
			</ul>
		</div>
	);
};

export default PostList;

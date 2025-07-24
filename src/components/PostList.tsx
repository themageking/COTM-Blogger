// src/components/PostList.tsx
"use client";

import { useState } from "react";
import BlogPostCard from "./BlogPostCard";

interface Author {
	name: string;
	picture: string;
}
type Post = {
	slug: string;
	title: string;
	summary: string;
	date: string;
	author: Author;
};

interface PostListProps {
	posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const filteredPosts = posts.filter((post) => {
		const titleMatch =
			post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
		const summaryMatch =
			post.summary?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
		return titleMatch || summaryMatch;
	});

	return (
		<div>
			<input
				type="text"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder="Pesquisar artigos..."
				className="w-full p-3 mb-8 border border-gray-200 rounded-sm transition-colors bg-gray-100 hover:bg-gray-50 focus:outline-none focus:bg-gray-200"
			/>

			<ul className="space-y-4">
				{filteredPosts.length > 0 ? (
					filteredPosts.map((post) => (
						<BlogPostCard
							key={post.slug}
							slug={post.slug}
							title={post.title}
							date={post.date}
							summary={post.summary}
							author={post.author}
						/>
					))
				) : (
					<p className="text-gray-400">Nenhum artigo encontrado.</p>
				)}
			</ul>
		</div>
	);
};

export default PostList;

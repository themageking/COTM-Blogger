// src/app/blog/page.tsx

import PostList from "@/components/PostList";
import { getSortedPostsData } from "@/lib/post";

export default function BlogPage() {
	const posts = getSortedPostsData();

	return (
		<div className="max-w-3xl mx-auto p-4">
			<h1 className="font-bold mb-8">Artigos</h1>
			<PostList posts={posts} />
		</div>
	);
}

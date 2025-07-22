import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import PostList from "../../components/PostList";

export default function BlogPage() {
	const postsDirectory = path.join(process.cwd(), "posts");
	const fileNames = fs.readdirSync(postsDirectory);

	const posts = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.mdx$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);

		return {
			slug,
			title: data.title,
			summary: data.summary,
			date: data.date,
		};
	});
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return (
		<div className="max-w-3xl mx-auto p-4">
			<h1 className="font-bold mb-8">Artigos</h1>
			<PostList posts={posts} />
		</div>
	);
}

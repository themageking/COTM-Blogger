import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPostCard from "../../components/BlogPostCard";


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
		};
	});

	return (
		<div className="max-w-3xl mx-auto p-4">
			<h1 className="text-4xl font-bold mb-8">Meu Blog</h1>
			<ul className="space-y-4">
				{posts.map((post) => {
					return (
						<BlogPostCard key={post.slug} slug={post.slug} title={post.title} summary={post.summary} />
					);
				})}
			</ul>
		</div>
	);
}

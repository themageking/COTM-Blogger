import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

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
				{posts.map((post) => (
					<li
						key={post.slug}
						className="p-4 border rounded-lg hover:bg-gray-100"
					>
						<Link href={`/blog/${post.slug}`} className="block">
							<h2 className="text-2xl font-semibold">{post.title}</h2>
							<p className="text-gray-600 mt-2">{post.summary}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

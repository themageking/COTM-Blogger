// src/app/blog/[slug]/page.tsx

import fs from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export default async function PostPage({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const fullPath = path.join(process.cwd(), "posts", `${slug}.mdx`);

	try {
		const fileContents = fs.readFileSync(fullPath, "utf8");

		const { content, frontmatter } = await compileMDX<{
			title: string;
			date: string;
		}>({
			source: fileContents,
			options: {
				parseFrontmatter: true,
				mdxOptions: {
					remarkPlugins: [remarkGfm],
					rehypePlugins: [
						[rehypePrettyCode,
						{ theme: "slack-dark" }],
					],
				},
			},
		});

		return (
			<article className="prose-content border border-gray-200 rounded-sm bg-gray-100 max-w-3xl mt-4 mx-auto p-4">
				<h1>{frontmatter.title}</h1>
				<p className="text-gray-400 mb-8">{frontmatter.date}</p>
				{content}
			</article>
		);
	} catch (_error) {
		return <div>Post não encontrado.</div>;
	}
}

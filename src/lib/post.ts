// src/lib/posts.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Post } from "../types/index";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(): Post[] {
	const fileNames = fs.readdirSync(postsDirectory);

	const allPostsData = fileNames.map((fileName): Post => {
		const slug = fileName.replace(/\.mdx$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);

		return {
			slug,
			title: data.title || "Sem Título",
			summary: data.summary || "",
			date: data.date
				? new Date(data.date).toISOString()
				: new Date().toISOString(),
			author: {
				name: data.author?.name || "Autor Desconhecido",
				picture: data.author?.picture || "/images/author/default.png",
			},
		};
	});

	return allPostsData.sort((a, b) => b.date.localeCompare(a.date));
}

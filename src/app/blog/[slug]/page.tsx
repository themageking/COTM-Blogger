import fs from "node:fs";
import path from "node:path";
import { compileMDX } from 'next-mdx-remote/rsc';

// Adicione 'async' aqui
export default async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  const fullPath = path.join(process.cwd(), "posts", `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { content, frontmatter } = await compileMDX<{ title: string; date: string }>({
      source: fileContents,
      options: { parseFrontmatter: true }
    });

    return (
      <article className="prose-content max-w-3xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
        <p className="text-gray-400 mb-8">{frontmatter.date}</p>
        {content}
      </article>
    );
  } catch (_error) {
    return <div>Post não encontrado.</div>;
  }
}
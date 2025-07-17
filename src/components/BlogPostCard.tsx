import Link from "next/link";

interface BlogPostCardProps {
	slug: string;
	title: string;
	summary: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ slug, title, summary }) => (
	<li className="p-4 border rounded-lg hover:bg-gray-100">
		<Link href={`/blog/${slug}`} className="block">
// Depois (Consistente com a regra global)
<h2 className="font-semibold">{title}</h2>			<p className="text-gray-600 mt-2">{summary}</p>
		</Link>
	</li>
);

export default BlogPostCard;

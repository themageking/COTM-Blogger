///workspaces/cultofthemagi-blog/src/components/BlogPostCard.tsx
import Link from "next/link";

interface BlogPostCardProps {
	slug: string;
	title: string;
	summary: string;
	date: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
	slug,
	title,
	summary,
	date,
}) => {
	const formatteDate = new Date(date).toLocaleDateString("pt-BR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	});
	return (
		<li className="p-4 border border-gray-200 rounded-sm transition-colors bg-gray-100 hover:bg-gray-50">
			<Link href={`/blog/${slug}`} className="block">
				<h2 className="m-0 my-2">{title}</h2>
				<time dateTime={date} className="text-sm text-gray-500">
					{formatteDate}
				</time>
				<p className="text-gray-700 mt-2">{summary}</p>
			</Link>
		</li>
	);
};
export default BlogPostCard;

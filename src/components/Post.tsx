import { StructuredText } from 'react-datocms';

export default function PostCard({ post }) {
	const { document } = post.content.value;

	return (
		<div key={post.id} className="w-full h-full p-8 bg-postBody rounded-lg">
			<h1 className="font-bold text-2xl mb-12">{post.title}</h1>

			<StructuredText data={document} />
		</div>
	);
}

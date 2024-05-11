import dayjs from 'dayjs';
import { SRCImage, StructuredText } from 'react-datocms';

export default function PostCard({ post }) {
	const { content, _createdAt } = post;

	const postDate = dayjs(_createdAt).format('DD/MM/YYYY - HH:mm');

	const renderBlock = ({ record }) => {
		switch (record.__typename) {
			case 'ImageBlockRecord':
				return <SRCImage data={record.image.responsiveImage} />;
			default:
				return null;
		}
	};

	return (
		<div key={post.id} className="w-full h-full p-8 bg-postBody rounded-lg">
			<h1 className="font-bold text-2xl mb-12 text-center">{post.title}</h1>

			<p className="text-gray-400 text-sm text-center">Escrito por Bruno Franco | {postDate}</p>

			<hr className="my-10" />

			<SRCImage data={post.cover.responsiveImage} />

			<StructuredText data={content} renderBlock={renderBlock} />
		</div>
	);
}

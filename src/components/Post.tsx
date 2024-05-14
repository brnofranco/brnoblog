import { getFormattedDate } from '@/shared/dayjs';
import { SRCImage, StructuredText } from 'react-datocms';

export default function PostCard({ post }) {
	const { content, _createdAt } = post;

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
			<h1 className="font-bold text-3xl mb-12 text-center">{post.title}</h1>

			<p className="text-gray-400 text-sm text-center">Escrito por Bruno Franco | {getFormattedDate(_createdAt)}</p>

			<hr className="w-full h-[1px] border-none border-t-2 bg-gray-700 my-10" />

			<SRCImage data={post.cover.responsiveImage} className="mb-12" />

			<div className="structured-data">
				<StructuredText data={content} renderBlock={renderBlock} />
			</div>
		</div>
	);
}

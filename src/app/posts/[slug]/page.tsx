import SocialMediaSideBar from '@/components/SocialMediaSideBar';
import { redirect } from 'next/navigation';
import LatestPostsSideBar from '@/components/LatestPostsSideBar';
import getAllPosts from '@/services/getPosts';
import CategorySideBar from '@/components/CategorySideBar';
import getPostBySlug from '@/services/getPostBySlug';
import { RenderBlockContext, ResponsiveImageType, SRCImage, StructuredText } from 'react-datocms';
import { getFormattedDate } from '@/shared/dayjs';

interface Record {
	id: string;
	__typename: string;
	image: { responsiveImage: ResponsiveImageType };
	[prop: string]: unknown;
}

interface PostProps {
	params: { slug: string };
}

export default async function Post({ params }: Readonly<PostProps>) {
	const post = await getPostBySlug(params.slug);

	if (!post?.title) {
		redirect('/404');
	}

	const allPosts = await getAllPosts();

	const renderBlock = ({ record }: RenderBlockContext<Record>) => {
		if (record.__typename === 'ImageBlockRecord') {
			return <SRCImage data={record.image.responsiveImage} />;
		}
		return null;
	};

	return (
		<>
			<div className="flex-2 w-full h-full">
				<div className="h-full w-full flex justify-center">
					<div key={post.id} className="w-full h-full p-8 bg-postBody shadow-md">
						<h1 className="font-bold text-3xl mb-12 text-center">{post.title}</h1>

						<p className="text-gray-400 text-sm text-center">Escrito por Bruno Franco | {getFormattedDate(post._createdAt)}</p>

						<hr className="w-full h-[1px] border-none border-t-2 bg-gray-700 my-10" />

						<SRCImage data={post.cover.responsiveImage} className="mb-12" />

						<div className="structured-data">
							<StructuredText data={post.content} renderBlock={renderBlock} />
						</div>
					</div>
				</div>
			</div>

			<div className="flex-1 w-full h-full">
				<div className="w-[95%] xl:w-full m-auto flex flex-col justify-center items-center gap-10">
					<LatestPostsSideBar allPosts={allPosts} />
					<CategorySideBar />
					<SocialMediaSideBar />
				</div>
			</div>
		</>
	);
}

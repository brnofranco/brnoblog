import SocialMediaSideBar from '@/components/SocialMediaSideBar';
import { redirect } from 'next/navigation';
import LatestPostsSideBar from '@/components/LatestPostsSideBar';
import CategorySideBar from '@/components/CategorySideBar';
import getPostBySlug from '@/services/getPostBySlug';
import { RenderBlockContext, ResponsiveImageType, SRCImage, StructuredText } from 'react-datocms';
import { getFormattedDate } from '@/shared/dayjs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyButton from '../../../components/CopyButton';
import Comments from '@/components/Comments';

interface Record {
	id: string;
	__typename: string;
	image: { responsiveImage: ResponsiveImageType };
	[prop: string]: unknown;
	codeBlock: { value: { document: { children: [{ language: string; code: string }] } } };
}

interface PostProps {
	params: { slug: string };
}

export default async function Post({ params }: Readonly<PostProps>) {
	const post = await getPostBySlug(params.slug);

	if (!post?.title) {
		redirect('/404');
	}

	const renderBlock = ({ record }: RenderBlockContext<Record>) => {
		if (record.__typename === 'ImageBlockRecord') {
			return <SRCImage data={record.image.responsiveImage} />;
		}

		if (record.__typename === 'CodeBlockRecord') {
			const codeData = record.codeBlock.value.document.children[0];

			return (
				<div className="flex w-full items-start justify-between bg-[#282c34]">
					<SyntaxHighlighter language={codeData.language} style={atomOneDark}>
						{codeData.code}
					</SyntaxHighlighter>
					<div className="flex p-3">
						<CopyButton code={codeData.code} />
					</div>
				</div>
			);
		}

		return null;
	};

	return (
		<>
			<div className="h-full w-full flex-2">
				<div className="flex h-full w-full justify-center">
					<div key={post.id} className="h-full w-full bg-postBody p-4 shadow-md xl:p-8">
						<h1 className="mb-12 text-center text-4xl font-bold">{post.title}</h1>

						<p className="text-center text-sm text-gray-400">
							Escrito por Bruno Franco | Publicado em {getFormattedDate(post._createdAt)}
						</p>

						<hr className="my-10 h-[1px] w-full border-t-2 border-none bg-gray-700" />

						<SRCImage data={post.cover.responsiveImage} className="mb-12" />

						<div className="structured-data">
							<StructuredText data={post.content} renderBlock={renderBlock} />
						</div>
					</div>
				</div>

				<Comments />
			</div>

			<div className="flex h-full w-full flex-1 flex-col gap-10">
				<LatestPostsSideBar />
				<CategorySideBar />
				<SocialMediaSideBar />
			</div>
		</>
	);
}

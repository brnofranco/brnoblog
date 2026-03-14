import { redirect } from 'next/navigation';
import getPostBySlug from '@/services/getPostBySlug';
import { RenderBlockContext, ResponsiveImageType, SRCImage, StructuredText } from 'react-datocms';
import { getFormattedDate } from '@/shared/dayjs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyButton from '../../../components/CopyButton';
import Comments from '@/components/Comments';
import type { Metadata } from 'next';
import getAllPostSlugs, { PostSlugData } from '@/services/getAllPostSlugs';

interface Record {
	id: string;
	__typename: string;
	image: { responsiveImage: ResponsiveImageType };
	[prop: string]: unknown;
	codeBlock: { value: { document: { children: [{ language: string; code: string }] } } };
}

interface PostProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const posts = await getAllPostSlugs();
	return posts.map((post: PostSlugData) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post?.title) return {};

	const description = post.preview?.slice(0, 160);
	const coverImage = post.cover?.responsiveImage;

	return {
		title: post.title,
		description,
		openGraph: {
			title: post.title,
			description,
			type: 'article',
			publishedTime: post._createdAt,
			...(coverImage?.src && {
				images: [
					{
						url: coverImage.src as string,
						width: coverImage.width,
						height: coverImage.height ?? undefined,
						alt: coverImage.alt || post.title,
					},
				],
			}),
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description,
			...(coverImage?.src && { images: [coverImage.src as string] }),
		},
	};
}

export default async function Post({ params }: Readonly<PostProps>) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

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
					<div key={post.id} className="h-full w-full">
						<h1 className="text-foreground mb-8 text-center text-4xl font-bold opacity-80">{post.title}</h1>

						<p className="text-text-muted mb-10 text-center text-sm">
							Publicado em {getFormattedDate(post._createdAt)}
						</p>

						<SRCImage data={post.cover.responsiveImage} imgClassName="mb-12" />

						<div className="structured-data">
							<StructuredText data={post.content} renderBlock={renderBlock} />
						</div>
					</div>
				</div>

				<div className="mt-4">
					<Comments />
				</div>
			</div>
		</>
	);
}

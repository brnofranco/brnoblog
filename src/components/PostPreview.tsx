'use client';

import { getFormattedDate } from '@/shared/dayjs';
import Link from 'next/link';
import { ResponsiveImageType, StructuredTextDocument } from 'react-datocms';

export interface PaginatedPostData {
	allPosts: PostData[];
	_allPostsMeta: { count: number };
}

export interface PostData {
	_createdAt: string;
	id: string;
	title: string;
	slug: string;
	preview: string;
	categories: CategoryData[];
	content: StructuredTextDocument;
	cover: { responsiveImage: ResponsiveImageType };
}

export interface CategoryData {
	title: string;
	id: string;
}

export default function PostPreview({ post, isLast = false }: Readonly<{ post: PostData; isLast?: boolean }>) {
	return (
		<div key={post.slug} className="flex h-full w-full flex-col gap-3">
			<div className="flex w-full flex-col items-center justify-between gap-2 xl:flex-row">
				<p className="w-full text-sm text-slate-400 xl:w-96">{getFormattedDate(post._createdAt)}</p>

				<div className="flex w-full flex-wrap items-center justify-start gap-2 xl:justify-end">
					{post.categories.map((category) => (
						<div key={category.id} className="border-title rounded-sm border p-1">
							<p className="text-title text-xs">{category.title}</p>
						</div>
					))}
				</div>
			</div>

			<Link href={`/posts/${post.slug}`}>
				<h2 className="text-title text-2xl font-bold">{post.title}</h2>
			</Link>

			<p className="mb-6 text-justify">{post.preview.slice(0, 255)}...</p>

			{!isLast ? <hr className="h-[2px] w-full border-t-2 border-none bg-gray-600" /> : null}
		</div>
	);
}

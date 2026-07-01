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
		<Link
			href={`/posts/${post.slug}`}
			key={post.slug}
			className="border-border bg-background flex h-full w-full flex-col gap-4 rounded-[1.25rem] border px-6 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
		>
			<div className="flex w-full flex-col items-center justify-between gap-2 xl:flex-row">
				<p className="text-text-muted w-full text-xs tracking-[0.24em] uppercase xl:w-96">
					{getFormattedDate(post._createdAt)}
				</p>

				<div className="flex w-full flex-wrap items-center justify-start gap-2 xl:justify-end">
					{post.categories.map((category) => (
						<div key={category.id} className="border-title bg-surface rounded-sm border px-2 pt-1">
							<h3 className="text-title text-[0.68rem] tracking-[0.18em] uppercase">{category.title}</h3>
						</div>
					))}
				</div>
			</div>

			<h2 className="text-title text-2xl font-semibold md:text-3xl">{post.title}</h2>

			<p className="text-justify leading-7">{post.preview}</p>
		</Link>
	);
}

'use client';

import { getFormattedDate } from '@/shared/dayjs';
import Link from 'next/link';
import { ResponsiveImageType, StructuredTextDocument } from 'react-datocms';

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

export default function PostPreview({ post }: Readonly<{ post: PostData }>) {
	return (
		<div key={post.slug} className="h-full w-full flex flex-col gap-3">
			<div className="w-full flex flex-col xl:flex-row justify-between items-center gap-2">
				<p className="w-full xl:w-64 text-sm text-slate-500">{getFormattedDate(post._createdAt)}</p>

				<div className="w-full flex justify-start xl:justify-end items-center flex-wrap gap-2">
					{post.categories.map((category) => (
						<div key={category.id} className="p-1 border border-title rounded-sm">
							<p className="text-title text-xs">{category.title}</p>
						</div>
					))}
				</div>
			</div>

			<Link href={`/posts/${post.slug}`}>
				<h2 className="text-title font-bold text-2xl">{post.title}</h2>
			</Link>

			<h5 className="text-justify">{post.preview.slice(0, 255)}...</h5>

			<hr className="w-full h-[2px] border-none border-t-2 bg-gray-600 mt-6" />
		</div>
	);
}

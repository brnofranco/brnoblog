import Link from 'next/link';
import SocialMediaSideBar from '../components/SocialMediaSideBar';
import { getFormattedDate } from '@/shared/dayjs';
import getAllPosts from '@/services/getPosts';
import CategorySideBar from '@/components/CategorySideBar';
import { ResponsiveImageType, StructuredTextDocument } from 'react-datocms';

export interface CategoryData {
	title: string;
	id: string;
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

export default async function Home() {
	const allPosts = await getAllPosts();

	return (
		<>
			<div className="flex-2 w-full h-full">
				<div className="w-full h-full flex flex-col items-center gap-10">
					{allPosts.map((post: PostData) => {
						return (
							<div key={post.slug} className="h-full w-full flex flex-col gap-3">
								<div className="w-full flex flex-col xl:flex-row justify-between items-center gap-2">
									<p className="w-full xl:w-52 text-sm text-slate-500">{getFormattedDate(post._createdAt)}</p>

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
					})}
				</div>
			</div>

			<div className="flex-1 w-full h-full flex flex-col gap-10">
				<CategorySideBar />
				<SocialMediaSideBar />
			</div>
		</>
	);
}


import CategorySideBar from '@/components/CategorySideBar';
import SocialMediaSideBar from '@/components/SocialMediaSideBar';
import { redirect } from 'next/navigation';
import getPostsByCategory from '@/services/getPostsByCategory';
import PostPreview, { PostData } from '@/components/PostPreview';

interface CategoryProps {
	params: Promise<{ category: string }>;
	searchParams: Promise<{ id: string }>;
}

export default async function Category({ params, searchParams }: Readonly<CategoryProps>) {
	const { id } = await searchParams;
	if (!id) {
		redirect('/404');
	}

	const { category } = await params;
	const categoryTitle = category.replaceAll('%20', ' ');
	const allPosts = await getPostsByCategory(id);

	if (!allPosts) {
		redirect('/404');
	}

	return (
		<>
			<div className="h-full w-full flex-2">
				<h1 className="mb-8 text-3xl font-bold">Posts sobre {categoryTitle}:</h1>

				<div className="flex h-full w-full flex-col items-center gap-10">
					{allPosts.length ? (
						allPosts.map((post: PostData, index) => (
							<PostPreview key={post.slug} post={post} isLast={allPosts.length === index + 1} />
						))
					) : (
						<div>
							<h2>Não há nenhum post nesta categoria!</h2>
						</div>
					)}
				</div>
			</div>

			<div className="flex h-full w-full flex-1 flex-col gap-10">
				<CategorySideBar />
				<SocialMediaSideBar />
			</div>
		</>
	);
}

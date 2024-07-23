import CategorySideBar from '@/components/CategorySideBar';
import SocialMediaSideBar from '@/components/SocialMediaSideBar';
import { redirect } from 'next/navigation';
import getPostsByCategory from '@/services/getPostsByCategory';
import PostPreview, { PostData } from '@/components/PostPreview';

interface CategoryProps {
	params: { category: string };
	searchParams: { id: string };
}

export default async function Category({ params, searchParams }: Readonly<CategoryProps>) {
	if (!searchParams?.id) {
		redirect('/404');
	}

	const categoryTitle = params.category.replaceAll('%20', ' ');
	const allPosts = await getPostsByCategory(searchParams.id);

	if (!allPosts) {
		redirect('/404');
	}

	return (
		<>
			<div className="h-full w-full flex-2">
				<h1 className="mb-8 text-3xl font-bold">Posts sobre {categoryTitle}:</h1>

				<div className="flex h-full w-full flex-col items-center gap-10">
					{allPosts.length > 0 ? (
						allPosts.map((post: PostData) => {
							return <PostPreview key={post.slug} post={post} />;
						})
					) : (
						<div>
							<h1>Não há nenhum post nesta categoria!</h1>
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

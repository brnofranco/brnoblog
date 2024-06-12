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
			<div className="flex-2 w-full h-full">
				<h1 className="text-3xl font-bold mb-8">Posts sobre {categoryTitle}:</h1>

				<div className="w-full h-full flex flex-col items-center gap-10">
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

			<div className="flex-1 w-full h-full flex flex-col gap-10">
				<CategorySideBar />
				<SocialMediaSideBar />
			</div>
		</>
	);
}

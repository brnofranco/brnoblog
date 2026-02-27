import { PaginatedPostData } from '@/components/PostPreview';
import PostsWithFilter from '@/components/PostsWithFilter';
import getCategories from '@/services/getCategories';
import getPaginatedPosts from '@/services/getPaginatedPosts';
import { config } from '@/shared/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'brunofranco.dev',
	description: 'Todos os posts do brnoblog sobre desenvolvimento de software, tecnologia e programação.',
	openGraph: {
		title: 'brunofranco.dev',
		description: 'Todos os posts do brnoblog sobre desenvolvimento de software, tecnologia e programação.',
		type: 'website',
	},
};

interface HomeProps {
	searchParams: Promise<{ page: string; categories: string }>;
}

export default async function Home({ searchParams }: Readonly<HomeProps>) {
	const { page, categories } = await searchParams;
	const currentPage = parseInt(page || '0');
	const categoryIds = categories ? categories.split(',').filter(Boolean) : undefined;

	const [{ allPosts, _allPostsMeta }, allCategories]: [PaginatedPostData, Awaited<ReturnType<typeof getCategories>>] =
		await Promise.all([getPaginatedPosts(currentPage, categoryIds), getCategories()]);

	const totalPosts = _allPostsMeta?.count || 0;
	const totalPages = Math.ceil(totalPosts / config.postsPerPage);

	return (
		<div className="h-full w-full flex-2">
			<div className="mb-16 flex w-full items-center justify-center">
				<h2 className="w-full text-center text-3xl font-bold text-white">
					Código, aprendizado e reflexões sobre desenvolvimento de software
				</h2>
			</div>

			<PostsWithFilter
				allPosts={allPosts}
				allCategories={allCategories}
				currentPage={currentPage}
				totalPages={totalPages}
				initialSelectedIds={categoryIds}
			/>
		</div>
	);
}

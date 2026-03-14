import { PaginatedPostData } from '@/components/PostPreview';
import PostsWithFilter from '@/components/PostsWithFilter';
import getCategories from '@/services/getCategories';
import getPaginatedPosts from '@/services/getPaginatedPosts';
import { config } from '@/shared/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'brunofranco.dev',
	description:
		'Código, aprendizado e reflexões sobre desenvolvimento Full Stack. Artigos técnicos sobre React, Next.js, Node.js, Java, arquitetura de software e boas práticas de programação.',
	openGraph: {
		title: 'brunofranco.dev',
		description:
			'Código, aprendizado e reflexões sobre desenvolvimento Full Stack. Artigos técnicos sobre React, Next.js, Node.js, Java, arquitetura de software e boas práticas de programação.',
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
				<h1 className="text-foreground w-full text-center text-2xl font-bold xl:text-3xl">
					Código, aprendizado e reflexões sobre desenvolvimento de software
				</h1>
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

import Link from 'next/link';
import SocialMediaSideBar from '../components/SocialMediaSideBar';
import CategorySideBar from '@/components/CategorySideBar';
import PostPreview, { PaginatedPostData, PostData } from '@/components/PostPreview';
import getPaginatedPosts from '@/services/getPaginatedPosts';
import { config } from '@/shared/config';

interface HomeProps {
	searchParams: { page: string };
}

export default async function Home({ searchParams }: Readonly<HomeProps>) {
	const currentPage = parseInt(searchParams?.page || '0');
	const data: PaginatedPostData = await getPaginatedPosts(currentPage);
	const allPosts = data?.allPosts || [];
	const totalPosts = data?._allPostsMeta?.count || 0;
	const totalPages = Math.ceil(totalPosts / config.postsPerPage);

	return (
		<>
			<div className="h-full w-full flex-2">
				<div className="flex h-full w-full flex-col items-center gap-10">
					{allPosts.map((post: PostData) => {
						return <PostPreview key={post.slug} post={post} />;
					})}
				</div>

				<div className="mt-6 flex h-full w-full items-center">
					{currentPage > 0 && (
						<Link
							href={`/?page=${currentPage - 1}`}
							className="flex h-full w-full items-center justify-center gap-3 bg-postBody py-5 text-sm font-semibold shadow-md transition hover:bg-zinc-900"
						>
							<span>{'<'}</span>
							<span>Anterior</span>
						</Link>
					)}

					{currentPage < totalPages - 1 && (
						<Link
							href={`/?page=${currentPage + 1}`}
							className="flex h-full w-full items-center justify-center gap-3 bg-postBody py-5 text-sm font-semibold shadow-md transition hover:bg-zinc-900"
						>
							<span>Próximo</span>
							<span>{'>'}</span>
						</Link>
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

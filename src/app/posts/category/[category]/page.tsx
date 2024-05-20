import Header from '@/components/Header';
import Link from 'next/link';
import { getFormattedDate } from '@/shared/dayjs';
import CategorySideBar from '@/components/Category';
import SocialSideBar from '@/components/Social';
import Footer from '@/components/Footer';
import { performRequest } from '@/lib/datocms';
import { PostData } from '@/app/page';
import { redirect } from 'next/navigation';

export default async function Category({ params, searchParams }) {
	if (!searchParams?.id) {
		redirect('/404');
	}

	const categoryTitle = params.category.replaceAll('%20', ' ');

	const PAGE_CONTENT_QUERY: string = `
	query PostsByCategory {
		allPosts (filter: { categories: { anyIn: "${searchParams.id}"} }, orderBy: [_createdAt_DESC] ) {
			_createdAt
			title
			slug
			preview
			categories {
				id
				title
			}
		}
	}`;
	const { allPosts } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0 });

	return (
		<div className="h-full w-full">
			<Header />
			<div className="min-h-screen h-full w-full flex justify-center">
				<div className="w-4/5 xl:max-w-[1280px] h-full flex flex-col xl:flex-row justify-center gap-16">
					<div className="flex-2 w-full h-full">
						<div>
							<Link href="/" className="text-title">
								{'<-'} Voltar para Home
							</Link>
							<h1 className="text-3xl font-bold mb-8">Posts sobre {categoryTitle}:</h1>
						</div>

						<div className="w-full h-full flex flex-col items-center gap-10">
							{allPosts.length > 0 ? (
								allPosts.map((post: PostData) => {
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
						<SocialSideBar />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}


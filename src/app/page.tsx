import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '../components/Footer';
import SocialSideBar from '../components/Social';
import { getFormattedDate } from '@/shared/dayjs';
import getAllPosts from '@/services/getAllPosts';

interface PostData {
	_createdAt: string;
	title: string;
	slug: string;
	preview: string;
}

export default async function Home() {
	const allPosts = await getAllPosts();

	return (
		<div className="h-full w-full">
			<Header />
			<div className="min-h-screen h-full w-full flex justify-center">
				<div className="w-4/5 xl:w-4/6 h-full flex flex-col xl:flex-row justify-center gap-16">
					<div className="flex-2 w-full h-full">
						<div className="w-full h-full flex flex-col items-center gap-10">
							{allPosts.map((post: PostData) => {
								return (
									<div key={post.slug} className="h-full w-full flex flex-col gap-2">
										<p className="text-sm text-slate-500">{getFormattedDate(post._createdAt)}</p>

										<Link href={`/posts/${post.slug}`}>
											<h2 className="text-title font-bold text-2xl">{post.title}</h2>
										</Link>

										<h5>{post.preview.slice(0, 150)}...</h5>

										<hr className="w-full h-[2px] border-none border-t-2 bg-gray-600 mt-6" />
									</div>
								);
							})}
						</div>
					</div>
					<div className="flex-1 w-full h-full shadow-lg flex flex-col gap-10">
						<SocialSideBar />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}


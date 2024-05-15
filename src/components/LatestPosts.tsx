import { getFormattedDate } from '@/shared/dayjs';
import Link from 'next/link';

export default async function LatestPostsSideBar({ allPosts }) {
	return (
		<aside className="w-full h-full p-8 bg-postBody rounded-lg flex flex-col gap-6">
			<div className="flex items-center flex-col gap-4">
				<h3 className="text-xl font-bold">Últimas publicações</h3>
				<hr className="w-20 h-[1px] border-none border-t-2 bg-gray-500" />
			</div>
			{allPosts.map((post) => {
				return (
					<div key={post.slug} className="h-full w-full flex flex-col gap-2">
						<h4 className="font-bold">
							<Link href={`/posts/${post.slug}`}> {post.title} </Link>
						</h4>

						<p className="text-slate-500 text-sm">{getFormattedDate(post._createdAt)}</p>
					</div>
				);
			})}
		</aside>
	);
}

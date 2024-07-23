import { getFormattedDate } from '@/shared/dayjs';
import { PostData } from './PostPreview';
import SideBarLayout from './SideBarLayout';
import Link from 'next/link';

interface LatestPostsSideBarProps {
	allPosts: PostData[];
}

export default async function LatestPostsSideBar({ allPosts }: Readonly<LatestPostsSideBarProps>) {
	return (
		<SideBarLayout title="Últimas publicações">
			{allPosts.map((post) => {
				return (
					<div key={post.slug} className="flex h-full w-full flex-col gap-2">
						<h4 className="font-bold">
							<Link href={`/posts/${post.slug}`}> {post.title} </Link>
						</h4>

						<p className="text-sm text-slate-500">{getFormattedDate(post._createdAt)}</p>
					</div>
				);
			})}
		</SideBarLayout>
	);
}

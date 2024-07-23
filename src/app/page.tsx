import SocialMediaSideBar from '../components/SocialMediaSideBar';
import getAllPosts from '@/services/getPosts';
import CategorySideBar from '@/components/CategorySideBar';
import PostPreview, { PostData } from '@/components/PostPreview';

export default async function Home() {
	const allPosts = await getAllPosts();

	return (
		<>
			<div className="h-full w-full flex-2">
				<div className="flex h-full w-full flex-col items-center gap-10">
					{allPosts.map((post: PostData) => {
						return <PostPreview key={post.slug} post={post} />;
					})}
				</div>
			</div>

			<div className="flex h-full w-full flex-1 flex-col gap-10">
				<CategorySideBar />
				<SocialMediaSideBar />
			</div>
		</>
	);
}

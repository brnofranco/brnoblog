import Header from '@/components/Header';
import { performRequest } from '@/lib/datocms';
import PostCard from '../../../components/Post';
import Footer from '@/components/Footer';
import SocialSideBar from '@/components/Social';
import { redirect } from 'next/navigation';
import LatestPostsSideBar from '@/components/LatestPosts';
import getAllPosts from '@/services/getAllPosts';
import CategorySideBar from '@/components/Category';

export default async function Post({ params }) {
	const PAGE_CONTENT_QUERY = `
	query Post {
		post (filter: { slug: { eq: "${params.slug}" } }) {
			_createdAt
			title
			cover {
				responsiveImage {
					sizes
					src
					width
					height
					alt
					title
					base64
				}
			}
			content {
				value
				blocks {
					__typename
					... on ImageBlockRecord {
						id
						image {
							responsiveImage {
								sizes
								src
								width
								height
								alt
								title
								base64
							}
						}
					}
				}
			}
        }
	}`;

	const { post } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0 });

	if (!post?.title) {
		redirect('/404');
	}

	const allPosts = await getAllPosts();

	return (
		<div className="h-full w-full">
			<Header />
			<div className="h-full w-full flex justify-center">
				<div className="w-[95%] xl:max-w-[1280px] h-full flex flex-col xl:flex-row justify-center gap-16">
					<div className="flex-2 w-full h-full">
						<div className="h-full w-full flex justify-center">
							<PostCard post={post} />
						</div>
					</div>

					<div className="flex-1 w-full h-full">
						<div className="w-[95%] xl:w-full m-auto flex flex-col justify-center items-center gap-10">
							<LatestPostsSideBar allPosts={allPosts} />
							<CategorySideBar />
							<SocialSideBar />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

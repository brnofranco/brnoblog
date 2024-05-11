import Header from '@/components/Header';
import PostCard from '@/components/Post';
import { performRequest } from '@/lib/datocms';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { SRCImage } from 'react-datocms';
import Footer from '../components/Footer';
import dayjs from 'dayjs';

const PAGE_CONTENT_QUERY: string = `
query Post {
	allPosts {
		_createdAt
		title
		slug
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

export default async function Home() {
	const { isEnabled } = draftMode();

	const { allPosts } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0, includeDrafts: isEnabled });

	const postDate = (date: string) => dayjs(date).format('DD/MM/YYYY - HH:mm');

	return (
		<div className="h-full w-full">
			<Header />
			<div className="h-full w-full flex justify-center">
				<div className="w-3/5 h-full flex justify-center gap-8">
					<div className="flex-2 w-full h-full shadow-lg">
						<PostCard post={allPosts[0]} />
					</div>
					<div className="flex-1 w-full h-full shadow-lg">
						<div className="w-full h-full p-4 bg-postBody rounded-lg flex flex-col gap-6">
							<div className="flex items-center flex-col gap-6">
								<h3 className="text-xl font-bold">Todas as publicações:</h3>
								<hr className="w-32 h-[1px] border-none border-t-2 bg-gray-500 " />
							</div>
							{allPosts.map((post) => {
								return (
									<div key={post.slug} className="h-full w-full flex flex-col gap-2">
										<h4 className="font-bold underline">
											<Link href={`/posts/${post.slug}`}> {post.title} </Link>
										</h4>

										<p className="">{postDate(post._createdAt)}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}


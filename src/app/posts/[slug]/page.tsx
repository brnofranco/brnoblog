import Header from '@/components/Header';
import { performRequest } from '@/lib/datocms';
import PostCard from '../../../components/Post';

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
		return <h1>Not found fera</h1>;
	}

	return (
		<div className="h-full w-full">
			<Header />
			<div className="h-full w-full flex justify-center">
				<div className="w-3/5 h-full flex items-center justify-center flex-col gap-4">
					<PostCard post={post} />
				</div>
			</div>
		</div>
	);
}

import Header from '@/components/Header';
import { performRequest } from '@/lib/datocms';
import PostCard from '../../../components/Post';

export default async function Post({ params }) {
	const PAGE_CONTENT_QUERY = `
    query Post {
		post (filter: { slug: { eq: "${params.slug}" } }) {
			slug
			title
			content {
				value
			}
        }
	}
	`;

	const {
		data: { post },
	} = await performRequest({ query: PAGE_CONTENT_QUERY });

	console.log(JSON.stringify(post));

	if (!post?.title) {
		return <h1>Not found fera</h1>;
	}

	const content = post.content.value.document.children[0].children[0].value;

	return (
		<div className="h-full w-full">
			<Header />
			<div className="h-full w-full flex justify-center">
				<div className="w-4/5 h-full flex items-center justify-center flex-col gap-4">
					<PostCard post={post} />
				</div>
			</div>
		</div>
	);
}

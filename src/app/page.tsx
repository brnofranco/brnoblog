import Header from '@/components/Header';
import { performRequest } from '@/lib/datocms';
import Link from 'next/link';

const PAGE_CONTENT_QUERY = `
query Post {
  allPosts {
    slug
    title
    content {
      value
    }
  }
}`;

export default async function Home() {
	const {
		data: { allPosts },
	} = await performRequest({ query: PAGE_CONTENT_QUERY });

	return (
		<div className="h-full w-full">
			<Header />
			<div className="h-full w-full flex justify-center">
				<div className="w-4/5 h-full flex items-center justify-center flex-col gap-4">
					{allPosts.map((post) => {
						const content = post.content.value.document.children[0].children[0].value;
						const slicedContent = content.slice(0, 33);
						return (
							<div key={post.id} className="w-full h-full p-3 bg-postBody rounded-lg">
								<h1 className="font-bold">
									<Link href={`/posts/${post.slug}`}> {post.title} </Link>
								</h1>

								<p className="text-gray-400">{slicedContent}</p>

								<Link href={`/posts/${post.slug}`} className="text-blue-300 underline">
									Veja o post completo
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}


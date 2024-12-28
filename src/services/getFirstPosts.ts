import { PostData } from '@/components/PostPreview';
import { performRequest } from '@/lib/datocms';

export default async function getFirstPosts(quantity: number) {
	const PAGE_CONTENT_QUERY: string = `
    query AllPosts {
        allPosts (orderBy: [_createdAt_DESC], first: ${quantity},)  {
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

	return allPosts as PostData[];
}

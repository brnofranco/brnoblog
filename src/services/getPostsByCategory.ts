import { PostData } from '@/components/PostPreview';
import { performRequest } from '@/lib/datocms';

export default async function getPostsByCategory(id: string) {
	const PAGE_CONTENT_QUERY: string = `
    query PostsByCategory {
        allPosts (filter: { categories: { anyIn: "${id}"} }, orderBy: [_createdAt_DESC] ) {
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

	try {
		const { allPosts } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0 });

		return allPosts as PostData[];
	} catch (error) {
		return;
	}
}

import { PostData } from '@/components/PostPreview';
import { performRequest } from '@/lib/datocms';

const PAGE_CONTENT_QUERY: string = `
query AllPosts {
    allPosts (orderBy: [_createdAt_DESC])  {
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

export default async function getAllPosts() {
	const { allPosts } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0 });

	return allPosts as PostData[];
}

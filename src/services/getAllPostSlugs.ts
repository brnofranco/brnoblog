import { performRequest } from '@/lib/datocms';

export interface PostSlugData {
	slug: string;
	_createdAt: string;
}

const PAGE_CONTENT_QUERY = `
query AllPostSlugs {
    allPosts(orderBy: [_createdAt_DESC], first: 500) {
        slug
        _createdAt
    }
}`;

export default async function getAllPostSlugs(): Promise<PostSlugData[]> {
	const { allPosts } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 3600 });

	return allPosts as PostSlugData[];
}

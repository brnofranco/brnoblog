import { PaginatedPostData } from '@/components/PostPreview';
import { performRequest } from '@/lib/datocms';

export const POSTS_PER_PAGE = 5;

export default async function getPaginatedPosts(page: number) {
	const skip = page * POSTS_PER_PAGE;

	const PAGE_CONTENT_QUERY: string = `
    query AllPosts {
        allPosts (orderBy: [_createdAt_DESC], first: ${POSTS_PER_PAGE}, skip: ${skip})  {
            _createdAt
            title
            slug
            preview
            categories {
                id
                title
            }
        },
        _allPostsMeta {
            count
        }
    }`;

	return (await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0 })) as PaginatedPostData;
}

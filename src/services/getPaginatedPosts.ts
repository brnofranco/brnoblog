import { PaginatedPostData } from '@/components/PostPreview';
import { performRequest } from '@/lib/datocms';
import { config } from '@/shared/config';

export default async function getPaginatedPosts(page: number, categoryIds?: string[]) {
	const POSTS_PER_PAGE = config.postsPerPage;
	const skip = page * POSTS_PER_PAGE;

	const categoryFilter =
		categoryIds && categoryIds.length > 0
			? `, filter: { categories: { allIn: [${categoryIds.map((id) => `"${id}"`).join(', ')}] } }`
			: '';

	const PAGE_CONTENT_QUERY: string = `
    query AllPosts {
        allPosts (orderBy: [_createdAt_DESC], first: ${POSTS_PER_PAGE}, skip: ${skip}${categoryFilter})  {
            _createdAt
            title
            slug
            preview
            categories {
                id
                title
            }
        },
        _allPostsMeta${categoryFilter && categoryIds ? `(filter: { categories: { allIn: [${categoryIds.map((id) => `"${id}"`).join(', ')}] } })` : ''} {
            count
        }
    }`;

	return (await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0 })) as PaginatedPostData;
}

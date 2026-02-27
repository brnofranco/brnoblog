import { PaginatedPostData } from '@/components/PostPreview';
import { performRequest } from '@/lib/datocms';
import { config } from '@/shared/config';

export default async function getPaginatedPosts(page: number, categoryIds?: string[]) {
	const POSTS_PER_PAGE = config.postsPerPage;
	const skip = page * POSTS_PER_PAGE;

	const hasCategories = categoryIds && categoryIds.length > 0;

	const PAGE_CONTENT_QUERY: string = `
    query AllPosts($first: IntType!, $skip: IntType!${hasCategories ? ', $categoryIds: [ItemId!]!' : ''}) {
        allPosts(orderBy: [_createdAt_DESC], first: $first, skip: $skip${hasCategories ? ', filter: { categories: { allIn: $categoryIds } }' : ''}) {
            _createdAt
            title
            slug
            preview
            categories {
                id
                title
            }
        },
        _allPostsMeta${hasCategories ? '(filter: { categories: { allIn: $categoryIds } })' : ''} {
            count
        }
    }`;

	const variables: Record<string, unknown> = { first: POSTS_PER_PAGE, skip };
	if (hasCategories) {
		variables.categoryIds = categoryIds;
	}

	return (await performRequest({ query: PAGE_CONTENT_QUERY, variables, revalidate: 0 })) as PaginatedPostData;
}

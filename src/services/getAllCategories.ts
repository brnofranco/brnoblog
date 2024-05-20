import { performRequest } from '@/lib/datocms';
import { draftMode } from 'next/headers';
import { CategoryData } from '../app/page';

const PAGE_CONTENT_QUERY: string = `
query AllCategories {
    allCategories {
        id
        title
    }
}`;

export default async function getAllCategories() {
	const { isEnabled } = draftMode();

	const { allCategories } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0, includeDrafts: isEnabled });

	return allCategories as CategoryData[];
}

import { performRequest } from '@/lib/datocms';
import { CategoryData } from '../app/page';

const PAGE_CONTENT_QUERY: string = `
query AllCategories {
    allCategories {
        id
        title
    }
}`;

export default async function getCategories() {
	const { allCategories } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0 });

	return allCategories as CategoryData[];
}

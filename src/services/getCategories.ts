import { CategoryData } from '@/components/PostPreview';
import { performRequest } from '@/lib/datocms';

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

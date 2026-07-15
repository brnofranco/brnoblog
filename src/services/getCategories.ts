import { CategoryData } from '@/components/PostPreview';
import { performRequest } from '@/lib/datocms';
import { config } from '@/shared/config';

const PAGE_CONTENT_QUERY: string = `
query AllCategories {
    allCategories {
        id
        title
    }
}`;

export default async function getCategories() {
	const { allCategories } = await performRequest({
		query: PAGE_CONTENT_QUERY,
		revalidate: config.cmsRevalidateSeconds,
	});

	return allCategories as CategoryData[];
}

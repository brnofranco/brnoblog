import { performRequest } from '@/lib/datocms';
import { draftMode } from 'next/headers';

const PAGE_CONTENT_QUERY: string = `
query Post {
    allPosts {
        _createdAt
        title
        slug
        preview
    }
  }`;

export default async function getAllPosts() {
	const { isEnabled } = draftMode();

	const { allPosts } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 10, includeDrafts: isEnabled });

	return allPosts;
}

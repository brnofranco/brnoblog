import { performRequest } from '@/lib/datocms';

export interface BookData {
	id: string;
	title: string;
	author: string;
	description: string;
	postLink: string;
	cover: {
		responsiveImage: {
			src: string;
		};
	};
}

const PAGE_CONTENT_QUERY: string = `
query AllBooks {
    allBooks {
        id
        title
        author
        description
        postLink
        cover {
            responsiveImage {
                src
            }
        }
    }
}`;

export default async function getBooks() {
	const { allBooks } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0 });
	return allBooks as BookData[];
}

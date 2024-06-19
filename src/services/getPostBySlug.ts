import { PostData } from '@/components/PostPreview';
import { performRequest } from '@/lib/datocms';

export default async function getPostBySlug(slug: string) {
	const PAGE_CONTENT_QUERY = `
    query Post {
        post (filter: { slug: { eq: "${slug}" } }) {
            _createdAt
            title
            cover {
                responsiveImage {
                    sizes
                    src
                    width
                    height
                    alt
                    title
                    base64
                }
            }
            content {
                value
                blocks {
                    __typename
                    ... on ImageBlockRecord {
                        id
                        image {
                            responsiveImage {
                                sizes
                                src
                                width
                                height
                                alt
                                title
                                base64
                            }
                        }
                    }
                    ... on CodeBlockRecord {
                        id
                        codeBlock {
                          value
                        }
                    }
                }
            }
        }
    }`;

	const { post } = await performRequest({ query: PAGE_CONTENT_QUERY, revalidate: 0 });

	return post as PostData;
}

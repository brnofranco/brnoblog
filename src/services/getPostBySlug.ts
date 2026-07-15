import { PostData } from '@/components/PostPreview';
import { performRequest } from '@/lib/datocms';
import { config } from '@/shared/config';

export default async function getPostBySlug(slug: string) {
	const PAGE_CONTENT_QUERY = `
    query Post($slug: String!) {
        post (filter: { slug: { eq: $slug } }) {
            _createdAt
            title
            slug
            preview
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

	const { post } = await performRequest({
		query: PAGE_CONTENT_QUERY,
		variables: { slug },
		revalidate: config.cmsRevalidateSeconds,
	});

	return post as PostData;
}

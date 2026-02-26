import type { MetadataRoute } from 'next';
import { config } from '@/shared/config';
import getAllPostSlugs from '@/services/getAllPostSlugs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getAllPostSlugs();

	const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
		url: `${config.siteUrl}/posts/${post.slug}`,
		lastModified: new Date(post._createdAt),
		changeFrequency: 'monthly',
		priority: 0.8,
	}));

	return [
		{
			url: `${config.siteUrl}/posts`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1.0,
		},
		{
			url: `${config.siteUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: `${config.siteUrl}/books`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		...postEntries,
	];
}

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github.com',
			},
			{
				protocol: 'https',
				hostname: 'www.datocms-assets.com',
			},
		],
	},
	experimental: {
		globalNotFound: true,
	},
};

export default nextConfig;

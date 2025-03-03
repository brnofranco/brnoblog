export const config = {
	postsPerPage: parseInt(process.env.POSTS_PER_PAGE || '5'),
	latestPostsQuantity: parseInt(process.env.LATEST_POSTS_QUANTITY || '3'),
	utteranc: {
		src: 'https://utteranc.es/client.js',
		repo: process.env.UTTERANC_REPO || 'brnofranco/brnoblog',
		issueTerm: process.env.UTTERANC_PATHNAME || 'pathname',
		theme: 'github-dark',
		crossorigin: process.env.UTTERANC_CROSSORIGIN || 'anonymous',
	},
};

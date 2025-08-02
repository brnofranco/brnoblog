export const config = {
	postsPerPage: parseInt(process.env.POSTS_PER_PAGE || '5'),
	latestPostsQuantity: parseInt(process.env.LATEST_POSTS_QUANTITY || '3'),
	socialMediaLinks: {
		linkedIn: process.env.LINKEDIN_URL ? process.env.LINKEDIN_URL : 'https://www.linkedin.com/in/brunofmoraes/',
		gitHub: process.env.GITHUB_URL ? process.env.GITHUB_URL : 'https://github.com/brnofranco',
		portfolio: process.env.PORTFOLIO_URL ? process.env.PORTFOLIO_URL : 'https://brnofranco.vercel.app',
	},
	utteranc: {
		src: 'https://utteranc.es/client.js',
		repo: process.env.UTTERANC_REPO || 'brnofranco/brnoblog',
		issueTerm: process.env.UTTERANC_PATHNAME || 'pathname',
		theme: 'github-dark',
		crossorigin: process.env.UTTERANC_CROSSORIGIN || 'anonymous',
	},
};

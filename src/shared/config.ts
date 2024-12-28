export const config = {
	postsPerPage: parseInt(process.env.POSTS_PER_PAGE || '5'),
	latestPostsQuantity: parseInt(process.env.LATEST_POSTS_QUANTITY || '3'),
};

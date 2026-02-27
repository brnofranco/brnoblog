import nextConfig from 'eslint-config-next';

const eslintConfig = [
	{
		ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**', 'build/**'],
	},
	...nextConfig,
];

export default eslintConfig;

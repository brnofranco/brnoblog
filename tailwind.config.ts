import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				postBody: '#232427',
				title: '#2cb67d',
				text: '#c9d3e7',
				background: '#2a2d34',
				header: '#101010',
			},
			flex: {
				'2': '2 2 0%',
				'3': '3 3 0%',
				'4': '4 4 0%',
			},
		},
	},
	plugins: [],
};
export default config;


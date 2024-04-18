/** @type {import('tailwindcss').Config} **/

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#a9a9a9',
				gray: '#181818',
			
			},
			screens: {
				mobile: [{ min: '350px', max: '768px' }],
				tablet: [{ min: '768px', max: '992px' }],
				laptop: [{ min: '992px' }],
			
			},
			fontFamily: {
				'sans': ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

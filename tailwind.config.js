/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			colors: {
				white: '#fff',
				'light-gray': '#E7E7E7',
				red: '#ee2523',
				'dark-red': '#ce1210',
				'black-light': '#1F1F1F',
				'black-dark': '#00000033',
				'gradient-start': '#f8f8f8',
				gray: 'rgba(0, 0, 0, 0.50)'
			},
			fontSize: {
				xs: '16px',
				sm: '18px',
				base: '24px',
				lg: '28px',
				'0.5-xl': '30px',
				xl: '32px',
				'2xl': '38px',
				'3xl': '40px',
				'3.5xl': '48px',
				'4xl': '50px'
			},
			lineHeight: {
				125: '125%',
				130: '130%',
				140: '140%',
				150: '150%'
			},
			spacing: {
				container: '1440px',
				laptop: '1280px',
				'sm-laptop': '1000px',
				tablet: '688px',
				mobile: '390px',
				0.8: '8px',
				1.1: '11px',
				1: '10px',
				1.6: '16px',
				1.8: '18px',
				2.4: '24px',
				2.8: '28px',
				3.6: '36px',
				4: '39px',
				6.4: '64px',
				16.1: '161px',
				19.9: '199px',
				4.3: '43px'
			}
		}
	},
	plugins: []
}

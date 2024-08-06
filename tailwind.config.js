/** @type {import('tailwindcss').Config} */
export default {
	content: [
			"./src/**/*.{js,jsx,ts,tsx}",
			"./node_modules/flowbite/**/*.js",
		],
theme: {
	extend: {
		colors: {
			'bg-primary': '#f34300',
			'bg-secondary': '#60ac',
			'bg-tint': '#f34300b3',
			'bg-baseline': '#ffcc00',
			'bg-basetrack': '#ff5722de'
		},
		screens: {
			'sg': "360px",
			'se': "375px",
			'xr': "414px",
			'xs': "480px",
			'cs': '590px',
			'ss': "620px",
			'sm': "768px",
			'mm': "987px",
			'md': "1060px",
			'lg': "1200px",
			'xl': "1700px",
		},
	},
},
	plugins: [
],
}


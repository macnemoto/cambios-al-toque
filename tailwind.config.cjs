const config = {
	content: ['./src/**/*.{html,js,svelte,ts}',
	"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
			  'custom-purple': '#220358',
			},
		  }
	},

	plugins: [ require('flowbite/plugin')],
	darkMode: 'class',
};

module.exports = config;

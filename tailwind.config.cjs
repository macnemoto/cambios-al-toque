const config = {
	content: ['./src/**/*.{html,js,svelte,ts}',
	"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	'./src/app.html'],

	theme: {
		extend: {
			colors: {
			  'custom-purple': '#220358',
			  'custom-black':'#050D25',
			},
		  }
	},

	plugins: [ require('flowbite/plugin')],
	darkMode: 'class',
};

module.exports = config;

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ["night"]
	  },

	theme: {
		extend: {}
	},

	plugins: [require("daisyui")]
};

module.exports = config;

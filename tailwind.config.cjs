const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ["dark"]
	  },

	theme: {
		extend: {}
	},

	plugins: [require("daisyui")]
};

module.exports = config;

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ["light"]
	  },

	theme: {
		extend: {}
	},

	plugins: [require("daisyui")]
};

module.exports = config;

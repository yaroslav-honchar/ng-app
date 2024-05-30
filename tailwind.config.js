/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
    container: {
      center: true,
      padding: "0 2rem"
    },
		extend: {
      backgroundColor: {
        'primary': '#111',
        'secondary': '#000'
      }
    },
	},
	plugins: [],
};

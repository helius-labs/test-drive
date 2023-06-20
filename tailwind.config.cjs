const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    daisyui: {
        themes: "emerald",
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        require("prettier-plugin-tailwindcss"),
    ],
};

module.exports = config;

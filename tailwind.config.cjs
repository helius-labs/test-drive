const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                HeliusOrange: "#E47332",
                RequestInputBG: "#D9D9D9",
            },
        },
    },

    daisyui: {
        themes: "light",
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        require("prettier-plugin-tailwindcss"),
    ],
};

module.exports = config;

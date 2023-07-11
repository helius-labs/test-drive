const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                HeliusOrangeLight: "#e35930",
                HeliusOrangeDark: "#e84125",
                HeliusBlack: "#000000",
                HeliusGray: "#e1d3d0",
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

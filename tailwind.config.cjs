/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    prefix: "tw-",
    theme: {
        colors: {
            white: "#fff",
            black: "#0B0D17",
            "white-purple": "#D0D6F9",
        },
        extend: {
            fontFamily: {
                sans: ["Bellefair", "serif"],
                Bellefair: ["Bellefair", "serif"],
                Barlow: ['"Barlow Condensed"', "sans-serif"],
            },
        },
    },
    plugins: [],
};

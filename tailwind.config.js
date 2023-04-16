/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: (theme) => ({
                112: "28rem",
                120: "30rem",
            }),
            minHeight: (theme) => ({
                80: "20rem",
            }),
            colors: {
                palette: {
                    lighter: "#f5f3ff",
                    light: "#ddd6fe",
                    primary: "#5b21b6",
                    dark: "#4c1d95",
                },
            },
            fontFamily: {
                primary: ['tanha']
            }
        },
    },
    plugins: [],
};
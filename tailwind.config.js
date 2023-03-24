/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "bh-green-hover": "#426516",
                "bh-green": "#537e1a",
                "bh-gray": "#a0a0a0",
                "bh-dark-gray": "#666666",
                "bh-text-gray": "#EFEFEF",
            },
            boxShadow: {
                "bh-shadow": "0px 35px 60px -15px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};

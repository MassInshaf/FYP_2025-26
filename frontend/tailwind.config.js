/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            backgroundImage: {
                backimage:
                    "url('https://www.calderagem.com/cdn/shop/articles/most_popular_precious_stones.jpg?v=1697663734&width=2048')",
            },
            backgroundOpacity: {
                '10': '0.1',
                '20': '0.2',
                '95': '0.95',
               }
        },
    },
    plugins: [],
};

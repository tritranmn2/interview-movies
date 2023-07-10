/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                'light-black': '#212121',
                'grey-white': '#666666',
                primary: '#3DD2CC',
                'transparent-white': 'rgba(232, 232, 232, 0.1)',
            },
        },
    },
    plugins: [],
};

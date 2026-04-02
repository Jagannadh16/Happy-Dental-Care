/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                outfit: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#0f766e', // deeper teal
                    dark: '#0f4f4f',    // darker teal for hover
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                },
                secondary: '#0a0f1c', // Richer dark slate
                accent: '#d97706',    // Darker amber for luxury
            },
            boxShadow: {
                'premium': '0 20px 40px -10px rgba(15, 118, 110, 0.15)',
                'glow': '0 0 20px rgba(20, 184, 166, 0.4)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            }
        },
    },
    plugins: [],
}

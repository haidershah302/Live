import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Audiowide', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms,require('daisyui')],
    daisyui: {
        themes: [
            'FlyLiveUi',
            {
                FlyLiveUi: {

                    "primary": "#ec4899",

                    "primary-content": "#fce7f3",

                    "secondary": "#e879f9",

                    "secondary-content": "#fae8ff",

                    "accent": "#f59e0b",

                    "accent-content": "#fef3c7",

                    "neutral": "#111827",

                    "neutral-content": "#f3f4f6",

                    "base-100": "#f5f5f4",

                    "base-200": "#e7e5e4",

                    "base-300": "#d6d3d1",

                    "base-content": "#1c1917",

                    "info": "#67e8f9",

                    "info-content": "#cffafe",

                    "success": "#00f190",

                    "success-content": "#d1fae5",

                    "warning": "#facc15",

                    "warning-content": "#fef9c3",

                    "error": "#ef4444",

                    "error-content": "#fee2e2",
                },
                // FlyLiveDark: {
                //
                //   "primary": "#fce7f3",
                //
                //   "primary-content": "#ec4899",
                //
                //   "secondary": "#fae8ff",
                //
                //   "secondary-content": "#e879f9",
                //
                //   "accent": "#fef3c7",
                //
                //   "accent-content": "#f59e0b",
                //
                //   "neutral": "#f3f4f6",
                //
                //   "neutral-content": "#111827",
                //
                //   "base-100": "#303030",
                //
                //   "base-200": "#e7e5e4",
                //
                //   "base-300": "#f5f5f4",
                //
                //   "base-content": "#f5f5f5",
                //
                //   "info": "#67e8f9",
                //
                //   "info-content": "#cffafe",
                //
                //   "success": "#00f190",
                //
                //   "success-content": "#d1fae5",
                //
                //   "warning": "#facc15",
                //
                //   "warning-content": "#fef9c3",
                //
                //   "error": "#ef4444",
                //
                //   "error-content": "#fee2e2",
                // },
            }
        ],
        // darkTheme: "FlyLiveDark",
        base: true, // applies background color and foreground color for root element by default

        styled: true, // include daisyUI colors and design decisions for all components

        // utils: true, // adds responsive and modifier utility classes

        // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)

        // logs: true, // Shows info about daisyUI version and used config in the console when building your CSS


        themeRoot: ":root", // The element that receives theme color CSS variables
    },
};

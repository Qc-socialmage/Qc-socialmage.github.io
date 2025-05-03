import tailwindcss, { postcss } from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

/** @type {import('postcss').AcceptedPlugin[]} */
export default {
    plugins: [
        // tailwindcss/postcss,
        tailwindcss,
        autoprefixer
    ],
};
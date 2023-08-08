/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Cantarell','sans-serif'],
        sub: ['REM'],
        cor: ['Courier Prime','monospace']
      },
    }
  },
  plugins: []
};
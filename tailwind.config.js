/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js" // <-- ajoute Flowbite ici
  ],
  theme: {
    extend: {},
  },
  plugins: ['flowbite/plugin'], // <-- ajoute le plugin Flowbite ici
}
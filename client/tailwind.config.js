/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "500px",
      // => @media (min-width: 500px) { ... }

      lg: "765px",
      // => @media (min-width: 765px) { ... }

      xl: "900px",
      // => @media (min-width: 900px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        dish: 'url("/src/assets/images/dish.png")',
        remove: 'url("/src/assets/images/remove.png")',
        review: 'url("/src/assets/images/review.png")',
        mainBG: 'url("/src/assets/images/mainBG.png")',
        add: 'url("/src/assets/images/plus.png")',
        reviewBG: 'url("/src/assets/images/reviewsBG.png")',
        updatedBG: 'url("/src/assets/images/updatedBG.png")',
        notFoundBG: 'url("/src/assets/images/404.jpg")',
      },
    },
  },

  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Montserrat"],
    },
    extend: {
      colors: {
        yellow: {
          100: "#f7eccf",
          200: "#efda9f",
          300: "#e7c770",
          400: "#dfb540",
          500: "#d7a210",
          600: "#ac820d",
          700: "#81610a",
          800: "#564106",
          900: "#2b2003",
        },
        blue: {
          100: "#cce4f6",
          200: "#99c9ed",
          300: "#66afe5",
          400: "#3394dc",
          500: "#0079d3",
          600: "#0061a9",
          700: "#00497f",
          800: "#003054",
          900: "#00182a",
        },
      },
      spacing: {
        70: "17.5rem",
        160: "40rem",
      },
      container: false,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": { maxWidth: "640px" },
          "@screen md": { maxWidth: "768px" },
          "@screen lg": { maxWidth: "975px" },
        },
      })
    },
  ],
}

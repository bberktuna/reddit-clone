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
      },
      spacing: {
        70: "17.5rem",
        160: "40rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

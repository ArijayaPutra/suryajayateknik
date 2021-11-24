module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#43E8C7",
        secondary: {
          100: "#8BECD9",
          200: "#A4ECD9",
        },
        tertiary: "#053742",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif", "ui-sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
    backgroundSize: {
      tesla: "200px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

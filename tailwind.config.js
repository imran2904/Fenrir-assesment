export default {
  darkMode: "class", 
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0CC8A8",
        dark: {
          bg: "#0F0F0F",
          surface: "#1A1A1A",
          border: "#2A2A2A",
        },
        light: {
          bg: "#FFFFFF",
          surface: "#F5F5F5",
          border: "#E5E5E5",
        },
      },
    },
  },
};
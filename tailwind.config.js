module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode:'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors:{
        mycolor:'#67b99c'
      }
    },
  },
  plugins: [],
};

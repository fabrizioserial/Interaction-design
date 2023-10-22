/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      primary:{
        100: '#F8E8E8',
        300: '#ECB9BD',
        500: '#94313E',
        700: '#57101E',
        900: '#38000E',
      },
      grey:{
        100: '#F4F4F4',
        300: '#CBCFD3',
        500: '#B8BCC1',
        700: '#747F86',
        900: '#1C2D38',
      }
    },
    fontSize:{
      'small' : '12px',
        'medium' : '14px',
        'large' : '16px',
    }
  },
  plugins: [],
}


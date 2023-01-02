/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode:'class',
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'green':'#00f260',
          dark: {
            DEFAULT: "#010101",
            100: "#0a0b0e",
            200: "#16181d",
            300: "#16181d",
            500: "#0f1115",
            700: "#202125",
          },
          'link':' #0077b5',
           'c++':'#00599C',
           'html':'#E34F26',
           'css':'#1572B6',
            'tailwind':'#06B6D4',
            'javascript':'yellow',
            'typescript':'#3178C6',
            'github':'white',
            'git':'#F05032',
            'canva':'#00C4CC',
            'express':'white',
            'postman':'#FF6C37',
             'mongodb':'#47A248',
             'nodejs':'#339933',
             'react':'#61DAFB',
             'nextjs':'white',
        },
        width:{
          'sicon':'80px'
         },
  
      },
      fontFamily: {
        'Kasuhan':['Kaushan Script','cursive'],
        'Dancing':['Dancing Script', 'cursive'],
        'Playball':['Playball','cursive'],
        'Great':['Great Vibes','cursive'],
        'Head':['M PLUS Rounded 1c','cursive'],
        'Balsamiq':['Balsamiq Sans','cursive'],
        'Island':['Island Moments','cursive'],
        'Hanken':['Hanken Grotesk','sans-serif'],
        'Acme':['Acme','sans-serif'],
        'Satisfy':['Satisfy','cursive'],
      },
      boxShadow: {
        "custom-light": " 0 0 10px #313131",
        "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
        'custom-white':'0px 0px 10x #fff',
      },

     
    },
    variants: {
      extend: {
        boxShadow: ["dark"],
      },
    },
    plugins: [],
}

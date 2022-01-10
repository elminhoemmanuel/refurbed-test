module.exports = {
	purge: ['./dist/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
    
        extend: {
          colors: {
            refmint:"#17A398",
            reftext:"#535760",
            gold:"#FAD9BD",
            red:"#912C34",
            silver:"#ECEAE3",
            grey:"#555251"
          }
        },
    
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        }
      },
	variants: {
		extend: {},
	},
	plugins: [],
};
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			primary: "#11181C", 
			secondary: "#1A1A1A",
			accent : "#666666", 
			background: "#FFFFFF", 
			boxes : "#242424",
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  fontFamily: {
			inter: ["Inter", "sans-serif"],
		  },
	
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

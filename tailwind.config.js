/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
				ubuntu: ['var(--font-ubuntu)'],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// ... rest of your colors configuration
			},
			// ... rest of your existing configuration
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'heading-gradient': 'linear-gradient(135deg, #FF6B6B, #E0B0FF, #4ECDC4)',
				'shine-size': 'radial-gradient(circle at var(--x) var(--y), var(--color) 0%, transparent 30%)',
			},
			dropShadow: {
				'heading': [
					'0 0 2px rgba(255, 255, 255, 0.3)',
					'0 0 4px rgba(78, 205, 196, 0.2)'
				],
			},
			fontSize: {
				'heading': 'clamp(2.5rem, 5vw, 6rem)',
				'subheading': 'clamp(1rem, 3vw, 2rem)',
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0 }
				},
				shine: {
					"0%": {
						"background-position": "0% 0%",
					},
					"50%": {
						"background-position": "100% 100%",
					},
					to: {
						"background-position": "0% 0%",
					},
				}
			},
			animation: {
				'blink': 'blink 1s step-end infinite',
				'shine': 'shine var(--duration) infinite linear',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
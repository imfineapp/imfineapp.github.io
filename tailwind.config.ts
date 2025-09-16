
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'roboto-slab': ['Roboto Slab', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(0 0% 25%)',
				input: 'hsl(0 0% 20%)',
				ring: 'hsl(63 100% 44%)',
				background: 'hsl(0 0% 8%)',
				foreground: 'hsl(0 0% 95%)',
				primary: {
					DEFAULT: 'hsl(63 100% 44%)',
					foreground: 'hsl(0 0% 8%)'
				},
				secondary: {
					DEFAULT: 'hsl(0 0% 15%)',
					foreground: 'hsl(0 0% 95%)'
				},
				destructive: {
					DEFAULT: 'hsl(0 62.8% 50.6%)',
					foreground: 'hsl(0 0% 95%)'
				},
				muted: {
					DEFAULT: 'hsl(0 0% 15%)',
					foreground: 'hsl(0 0% 70%)'
				},
				accent: {
					DEFAULT: 'hsl(63 100% 44%)',
					foreground: 'hsl(0 0% 8%)'
				},
				popover: {
					DEFAULT: 'hsl(0 0% 12%)',
					foreground: 'hsl(0 0% 95%)'
				},
				card: {
					DEFAULT: 'hsl(0 0% 12%)',
					foreground: 'hsl(0 0% 95%)'
				},
				sidebar: {
					DEFAULT: 'hsl(0 0% 10%)',
					foreground: 'hsl(0 0% 95%)',
					primary: 'hsl(63 100% 44%)',
					'primary-foreground': 'hsl(0 0% 8%)',
					accent: 'hsl(0 0% 15%)',
					'accent-foreground': 'hsl(0 0% 95%)',
					border: 'hsl(0 0% 20%)',
					ring: 'hsl(63 100% 44%)'
				},
				green: {
					400: '#e1ff00',
					500: '#e1ff00',
					600: '#c9e600',
					700: '#b1cc00',
				}
			},
			borderRadius: {
				lg: '0.75rem',
				md: '0.5rem',
				sm: '0.375rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow': {
					'0%, 100%': {
						textShadow: '0 0 20px rgba(225, 255, 0, 0.5)'
					},
					'50%': {
						textShadow: '0 0 30px rgba(225, 255, 0, 0.8)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [import("tailwindcss-animate")],
} satisfies Config;

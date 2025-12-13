/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  theme: {
  	extend: {
  		fontFamily: {
  			headline: ['Playfair Display', 'serif'],
  			body: ['Open Sans', 'Inter', 'sans-serif'],
  			cta: ['Montserrat', 'sans-serif'],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			'text-primary': 'var(--color-text-primary)',
  			'text-secondary': 'var(--color-text-secondary)',
  			surface: 'var(--color-surface)',
  			success: {
  				DEFAULT: 'var(--color-success)',
  				foreground: 'var(--color-success-foreground)',
  			},
  			warning: {
  				DEFAULT: 'var(--color-warning)',
  				foreground: 'var(--color-warning-foreground)',
  			},
  			error: {
  				DEFAULT: 'var(--color-error)',
  				foreground: 'var(--color-error-foreground)',
  			},
  			trust: {
  				DEFAULT: 'var(--color-trust)',
  				foreground: 'var(--color-trust-foreground)',
  			},
  			craftsmanship: {
  				DEFAULT: 'var(--color-craftsmanship)',
  				foreground: 'var(--color-craftsmanship-foreground)',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'brand': 'var(--shadow-sm)',
  			'brand-md': 'var(--shadow-md)',
  			'brand-lg': 'var(--shadow-lg)',
  		},
  		transitionDuration: {
  			'fast': 'var(--transition-fast)',
  			'base': 'var(--transition-base)',
  			'slow': 'var(--transition-slow)',
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}


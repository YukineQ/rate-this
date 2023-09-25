import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': 'hsl(var(--primary) / <alpha-value>)',
        'border': 'hsl(var(--border) / <alpha-value>)',
        'foreground': 'hsl(var(--foreground) / <alpha-value>)',
        'ghost': 'hsl(var(--ghost) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        'card-hover': 'hsl(var(--card-hover) / <alpha-value>)',
        'button': 'hsl(var(--button) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        'muted': 'hsl(var(--muted) / <alpha-value>)',
        'accent': 'hsl(var(--accent) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}
export default config

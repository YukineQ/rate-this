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
        'primary': 'hsl(var(--primary))',
        'border': 'hsl(var(--border))',
        'foreground': 'hsl(var(--foreground))',
        'ghost': 'hsl(var(--ghost))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        'card-hover': 'hsl(var(--card-hover))',
        'button': 'hsl(var(--button))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        'muted': 'hsl(var(--muted))',
        'accent': 'hsl(var(--accent))',
      }
    },
  },
  plugins: [],
}
export default config

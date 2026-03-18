/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-outer': 'var(--color-bg-outer)',
        'bg-content': 'var(--color-bg-content)',
        'bg-card': 'var(--color-bg-card)',
        'border-subtle': 'var(--color-border-subtle)',
        'border-card': 'var(--color-border-card)',
        'accent-mauve': 'var(--color-accent-mauve)',
        'accent-mauve-light': 'var(--color-accent-mauve-light)',
        'accent-slate': 'var(--color-accent-slate)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'mvp-bg': 'var(--color-mvp-bg)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

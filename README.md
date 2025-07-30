# Navneetha Rajan - Personal Website

A minimalistic personal website built with Next.js, inspired by modern design principles and smooth animations.

## Features

- 🎨 Minimalistic and clean design
- 📱 Fully responsive
- ✨ Smooth animations with Framer Motion
- 🎯 SEO optimized
- ⚡ Fast performance with Next.js
- 🎨 Beautiful typography with Inter font
- 🌙 Dark theme with sky blue accents
- 🚀 GitHub Pages ready

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Inter, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/navneetha-rajan/navneetha-rajan.github.io.git
cd navneetha-rajan.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### GitHub Pages (Recommended)

This website is configured for automatic deployment to GitHub Pages:

1. **Push your code** to the `main` branch
2. **GitHub Actions** will automatically build and deploy
3. **Your site** will be available at `https://navneetha-rajan.github.io`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out` directory
3. Upload the contents of the `out` directory to your hosting provider

### Local Build Test

To test the production build locally:
```bash
npm run build
npx serve out
```

## Customization

### Personal Information

Update the following in `app/page.tsx`:
- Name and title
- About section content
- Project details
- Social media links
- Contact information

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind classes

### Content

- Update metadata in `app/layout.tsx`
- Modify project data in the `projects` array
- Update social links in the `socialLinks` array

## GitHub Pages Configuration

The website is pre-configured for GitHub Pages with:

- **Static export** configuration in `next.config.js`
- **GitHub Actions workflow** for automatic deployment
- **Proper base path** handling for repository-based deployment

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: connectwithnavneetha08@gmail.com
- Phone: +1 (602) 751-4983
- GitHub: [@navneetha-rajan](https://github.com/navneetha-rajan)
- LinkedIn: [Navneetha Rajan](https://www.linkedin.com/in/navneetha-rajan)

# sunny — Portfolio

A modern, responsive portfolio for **sunny (@sunymz)** — a Software & Backend Engineer and IT support professional offering Discord server setup services. Built with React, TypeScript, and Tailwind CSS, featuring a sleek dark/light theme, smooth animations, and interactive toggler sections.

## 🚀 Live Demo

[View Live Demo](https://your-portfolio-url.com) *(Deploy your site to see the live version)*

## ✨ Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Smooth Animations**: Custom animations and transitions for enhanced user experience
- **Modern UI**: Sleek dark/light theme with glassmorphism effects and semantic color tokens
- **Performance Optimized**: Efficient rendering and optimized assets
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **SEO Friendly**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19.2.0)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v5.9.3)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom configurations
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) (v7.2.4)

## 📋 Requirements

To run this project locally, you'll need:

- **Node.js** (version 18.x or later)
- **npm** or **yarn** package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-tailwind-portfolio.git
   cd react-tailwind-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Or if using yarn:

   ```bash
   yarn install
   ```

### Development

To start the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

This will start the development server at `http://localhost:48484`. The application will automatically reload when you make changes to the source files.

### Building for Production

To build the application for production:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

This will create a `dist` folder with the optimized production-ready build.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

Or with yarn:

```bash
yarn preview
```

## 📁 Project Structure

```text
src/
├── components/         # Reusable components
│   ├── Modal.tsx       # Modal window wrapper
│   └── Navigation.tsx  # Navigation component
├── sections/          # Page sections (opened as modal togglers)
│   ├── Hero.tsx                    # Hero section
│   ├── MenuSection.tsx             # Explore / toggler menu
│   ├── SunnyDashboard.tsx          # Persona dashboard
│   ├── GitHubWork.tsx              # Software & backend engineering summary
│   ├── EnvironmentSection.tsx      # Environmental science & tech + projects
│   ├── CommunityExperience.tsx     # Discord community experience
│   ├── CommissionBoard.tsx         # Discord setup packages & pricing
│   ├── TermsOfService.tsx          # Terms of service
│   └── Footer.tsx                  # Footer section
├── lib/               # Utility functions
│   └── modals.ts      # Modal registry
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
├── index.css          # Global styles & theme tokens
└── App.css            # Component-specific styles
```

## 🔧 Configuration

### Environment Variables

If you need to configure environment variables, create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=your-email@example.com
```

### Tailwind CSS

The project uses Tailwind CSS with custom configurations in `tailwind.config.js`. You can modify colors, breakpoints, and other design tokens there.

### TypeScript

TypeScript configuration is located in `tsconfig.json`. The project uses strict type checking for better code quality.

## 🎨 Customization

### Colors & Theme

The color scheme is defined by semantic CSS variables in `src/index.css`. Light mode lives under `:root` and dark mode under `.dark`:

```css
:root {
  --background: 210 60% 98%;
  --foreground: 218 40% 14%;
  --card: 0 0% 100%;
  --muted-foreground: 220 16% 36%;
  --accent: 165 90% 35%;
  --border: 214 32% 88%;
}

.dark {
  --background: 216 50% 7%;
  --foreground: 213 47% 95%;
  --card: 216 50% 10%;
  --muted-foreground: 222 22% 61%;
  --accent: 166 100% 55%;
  --border: 216 45% 20%;
}
```

Components reference these tokens through Tailwind utilities (e.g., `bg-background`, `text-foreground`, `bg-card`, `border-border`, `text-accent`), so both dark and light modes stay consistent. The theme is toggled by adding the `dark` class to the document root (`App.tsx`).

### Fonts

The project uses Inter for body text and Fira Code for monospace elements. You can change these in `src/index.css`.

## 🧪 Testing

To run linting checks:

```bash
npm run lint
```

## 🚢 Deployment

### Netlify

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `dist`

### Vercel

1. Push your code to a GitHub repository
2. Import your project in Vercel
3. Set build command to `npm run build`
4. Set output directory to `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add `"homepage"` to package.json: `"homepage": "https://yourusername.github.io/repo-name"`
3. Add deploy script to package.json: `"deploy": "gh-pages -d dist"`
4. Build and deploy: `npm run build && npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐞 Issues

If you encounter any issues or have suggestions for improvements, please open an issue in the repository.

## 👨‍💻 Author

sunny (@sunymz) — Software & Backend Engineer

- X: [@sunymz](https://x.com/sunymz)
- GitHub: [@schkj](https://github.com/schkj)

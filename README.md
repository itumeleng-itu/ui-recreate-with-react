# Sunnyside Agency Landing Page

A pixel-perfect recreation of the Sunnyside Agency Landing Page built with React, TypeScript, and Vite. This project demonstrates modern frontend development practices with component-based architecture and responsive design.


## Preview

![Sunnyside Agency Landing Page](./src/assets/design/desktop-design.jpg)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Components](#components)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive navigation with mobile hamburger menu
- Full-screen hero section with animated scroll indicator
- Content sections with alternating image/text layouts
- Side-by-side service cards with overlay text
- Client testimonials section
- Image gallery grid
- Responsive footer with navigation and social links

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite 7
- **Styling:** Vanilla CSS
- **Linting:** ESLint with TypeScript support

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js

Verify your installations by running:

```bash
node --version
npm --version
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/itumeleng-itu/ui-recreate-with-react.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd ui-recreate-with-react
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
ui-recreate-with-react/
├── public/                  # Static assets
├── src/
│   ├── assets/
│   │   ├── design/          # Design reference files
│   │   └── images/          # Project images (mobile/desktop)
│   ├── components/
│   │   ├── ContentSection.tsx   # Text + image content blocks
│   │   ├── Footer.tsx           # Site footer with nav and social
│   │   ├── GalleryItem.tsx      # Gallery image component
│   │   ├── HeroSection.tsx      # Full-screen hero with navigation
│   │   ├── Navigation.tsx       # Responsive navigation bar
│   │   ├── ServiceCard.tsx      # Service overlay cards
│   │   └── Testimonial.tsx      # Client testimonial card
│   ├── types/               # TypeScript type definitions
│   ├── App.css              # Main application styles
│   ├── App.tsx              # Main application component
│   ├── index.css            # Global styles and CSS reset
│   └── main.tsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## Components

| Component | Description |
|-----------|-------------|
| `HeroSection` | Full-viewport hero with background image, navigation, and scroll arrow |
| `Navigation` | Responsive navbar with mobile hamburger menu toggle |
| `ContentSection` | Flexible text/image section with reversible layout |
| `ServiceCard` | Image card with overlaid text content |
| `Testimonial` | Client review card with avatar, quote, and attribution |
| `GalleryItem` | Clickable gallery image component |
| `Footer` | Site footer with navigation links and social icons |

## Future Improvements

- [ ] Add smooth scroll functionality for navigation links
- [ ] Implement functional "Learn More" button actions
- [ ] Add page routing for About, Services, and Projects pages
- [ ] Enhance gallery with lightbox functionality
- [ ] Add form functionality to Contact button
- [ ] Implement scroll-triggered animations
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Add unit tests with Vitest
- [ ] Optimize images with lazy loading

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with React and Vite

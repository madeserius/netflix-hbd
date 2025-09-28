# Netflix Clone UI - Claude Guide

## Project Overview

This is a React-based Netflix clone UI built as a code-along project. It replicates the visual design and layout of Netflix's interface with modern React components and CSS modules.

**Original Tutorial**: [YouTube Video](https://www.youtube.com/watch?v=HAb3KWkynOc)
**Assets Repository**: [GitHub Assets](https://github.com/danascript/netflix-clone-ui-assets)

## Tech Stack

- **Framework**: React 17.0.2
- **Build Tool**: Create React App (react-scripts 4.0.3)
- **Styling**: CSS Modules + normalize.css
- **Language**: JavaScript (JSX)
- **Node Version**: Compatible with Node.js 22+ (requires legacy OpenSSL)

## Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server (Node.js 22+)
NODE_OPTIONS="--openssl-legacy-provider" npm start

# For older Node versions
npm start

# Build for production
npm run build

# Run tests
npm test
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.1.13:3000

## Project Structure

```
netflix-clone-ui/
├── public/
│   ├── index.html          # HTML template
│   ├── favicon.ico         # Netflix-style favicon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── Billboard/      # Hero section component
│   │   ├── Navigation/     # Main navigation bar
│   │   ├── Titles/         # Content sections
│   │   ├── Footer/         # Footer component
│   │   ├── Search/         # Search functionality
│   │   ├── UserMenu/       # User menu dropdown
│   │   └── ...             # Other UI components
│   ├── App.js              # Main application component
│   ├── App.css             # Global app styles
│   ├── index.js            # React app entry point
│   ├── index.css           # Global styles
│   └── normalize.css       # CSS reset/normalize
├── package.json            # Project dependencies
├── .prettierrc             # Code formatting config
└── README.md               # Basic project info
```

## Component Architecture

### Main Components

1. **App Component** (`src/App.js`)
   - Root component that orchestrates the layout
   - Renders: Billboard → Navigation → Titles → Footer

2. **Billboard Component** (`src/components/Billboard/`)
   - Hero section with featured content
   - Displays "Abstract: The Art of Design" showcase
   - Includes Play and More Info buttons

3. **Navigation Component** (`src/components/Navigation/`)
   - Main navigation bar with Netflix logo
   - Menu items: Home, TV Shows, Movies, New & Popular, My List
   - Includes secondary navigation (search, notifications, user menu)

4. **Titles Component** (`src/components/Titles/`)
   - Content grid sections
   - Multiple segments: "Popular on Netflix", "Continue watching", etc.
   - Uses Segment component for each row

5. **Footer Component** (`src/components/Footer/`)
   - Site footer with links and social media

### Component Pattern

Each component follows this structure:
```
ComponentName/
├── index.js                # Export file
├── ComponentName.jsx       # Main component file
├── ComponentName.module.css # Component-specific styles
└── assets/                 # Component assets (images, icons)
```

## Styling System

- **CSS Modules**: Scoped component styles
- **Normalize.css**: Cross-browser consistency
- **Global Styles**: Base typography and layout in `App.css`
- **Responsive Design**: Mobile-first approach

### Color Scheme
- Primary: Netflix Red (#E50914)
- Background: Dark (#141414)
- Text: White/Light Gray
- Accent: Various grays for UI elements

## Development Commands

```bash
# Development
npm start                   # Start dev server
npm run build              # Create production build
npm test                   # Run test suite
npm run eject              # Eject from CRA (not recommended)

# With Node.js 22+ (recommended)
NODE_OPTIONS="--openssl-legacy-provider" npm start

# Code formatting
npx prettier --write .     # Format all files

# Dependency management
npm audit                  # Check for vulnerabilities
npm audit fix             # Fix non-breaking vulnerabilities
```

## Known Issues & Solutions

### OpenSSL Error (Node.js 22+)
**Error**: `error:0308010C:digital envelope routines::unsupported`

**Solution**: Use legacy OpenSSL provider
```bash
NODE_OPTIONS="--openssl-legacy-provider" npm start
```

### Security Vulnerabilities
The project uses older dependencies with known vulnerabilities. For production use:
1. Run `npm audit fix` to address non-breaking fixes
2. Consider upgrading to newer react-scripts version
3. Update React to latest stable version

## Customization Guide

### Adding New Components
1. Create component directory in `src/components/`
2. Follow the established folder structure
3. Use CSS Modules for styling
4. Export through `index.js` file

### Modifying Content
- **Billboard content**: Edit `src/components/Billboard/Billboard.jsx`
- **Navigation items**: Modify `navItems` array in `Navigation.jsx`
- **Content sections**: Update `Titles.jsx` segment titles

### Styling Changes
- **Global styles**: Edit `src/App.css`
- **Component styles**: Modify respective `.module.css` files
- **Colors/themes**: Update CSS custom properties

## Asset Management

Assets are organized within component folders:
- Images: `.webp`, `.png` formats for optimization
- Icons: SVG components for scalability
- Fonts: System fonts + Netflix-style typography

## Browser Support

- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

## Performance Considerations

- Images optimized with modern formats (.webp)
- CSS Modules prevent style conflicts
- Component-based architecture enables code splitting
- Lazy loading can be implemented for content sections

## Contributing

1. Follow existing code structure and naming conventions
2. Use CSS Modules for component styling
3. Maintain responsive design principles
4. Test across different screen sizes
5. Follow Prettier configuration for code formatting

## Troubleshooting

### Common Issues

1. **Blank page**: Check browser console for JavaScript errors
2. **Styles not loading**: Verify CSS Module import paths
3. **Images not displaying**: Check asset paths and file extensions
4. **Build failures**: Clear node_modules and reinstall dependencies

### Debug Commands
```bash
# Clear dependencies
rm -rf node_modules package-lock.json
npm install

# Check for issues
npm audit
npm run build    # Test production build
```

## Future Enhancements

Potential improvements for this project:
- Add React Router for navigation
- Implement real movie/show data via APIs
- Add user authentication
- Create responsive mobile layout
- Add video player functionality
- Implement search functionality
- Add loading states and animations

---

**Note**: This is a UI clone for educational purposes. It demonstrates modern React development practices and Netflix-style interface design.
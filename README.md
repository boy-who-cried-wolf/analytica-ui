# Analytica UI

A modern React TypeScript application with Tailwind CSS for beautiful, responsive user interfaces.

## Features

- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- 🚀 Fast development with hot reload
- 🧪 Testing setup with React Testing Library

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd analytica-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── App.tsx          # Main application component
├── index.tsx        # Application entry point
├── index.css        # Global styles with Tailwind directives
├── App.test.tsx     # Component tests
└── logo.svg         # React logo
```

## Tailwind CSS

This project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js` and PostCSS configuration is in `postcss.config.js`.

### Customization

You can customize Tailwind by modifying the `tailwind.config.js` file:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add your custom theme extensions here
    },
  },
  plugins: [],
}
```

## Learn More

- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

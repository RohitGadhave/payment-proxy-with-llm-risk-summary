# Payment Proxy with LLM Risk Summary

A Node.js/TypeScript application for payment proxy with LLM risk analysis.

## Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run dev-mac` - Start development server on macOS
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run serve` - Start Netlify development server

### Code Quality

This project uses ESLint and Prettier for code quality and formatting.

#### Linting Scripts

- `npm run lint` - Check code for linting errors and warnings
- `npm run lint:fix` - Auto-fix linting issues where possible
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run lint-and-format` - Run both linting fixes and formatting
- `npm run pre-commit` - Run linting and format checks (use before commits)

#### VS Code Integration

The project includes VS Code settings for automatic formatting and linting:

- Install recommended extensions: ESLint, Prettier, TypeScript
- Code will be automatically formatted on save
- ESLint issues will be highlighted in the editor
- Auto-fix ESLint issues on save

#### Configuration Files

- `eslint.config.js` - ESLint configuration with TypeScript support
- `.prettierrc` - Prettier formatting rules
- `.prettierignore` - Files to ignore during formatting
- `.vscode/settings.json` - VS Code editor settings
- `.vscode/extensions.json` - Recommended VS Code extensions

## Project Structure

```
src/
├── config/           # Configuration files
├── controllers/      # Route controllers
├── middlewares/      # Express middlewares
├── models/           # Data models
├── public/           # Static assets
├── routes/           # API routes
├── services/         # Business logic services
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── views/            # Template views
```

## Contributing

1. Make sure your code passes linting: `npm run lint`
2. Ensure code is properly formatted: `npm run format:check`
3. Run the pre-commit checks: `npm run pre-commit`

## License

ISC

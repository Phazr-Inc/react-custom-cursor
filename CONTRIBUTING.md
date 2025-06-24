# Contributing to @phazr/react-custom-cursor

First off, thank you for considering contributing to `@phazr/react-custom-cursor`! We welcome all contributions, whether they're bug reports, feature requests, documentation improvements, or code contributions.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Code Style](#code-style)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [existing issues](https://github.com/Phazr-Inc/react-custom-cursor/issues) to avoid duplicates.

When filing a bug report, please include:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** - Include code snippets or links to live examples
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots or GIFs** if applicable
- **Environment details** - OS, browser, React version, Next.js version (if applicable)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- **A clear and descriptive title**
- **A detailed description of the proposed enhancement**
- **Explain why this enhancement would be useful** to most users
- **Include mockups or examples** if applicable

### Contributing Code

We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`
2. Add tests for any new functionality
3. Ensure the test suite passes
4. Make sure your code follows our style guidelines
5. Submit your pull request!

## Development Setup

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm/yarn

### Getting Started

1. **Fork and clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-custom-cursor.git
   cd react-custom-cursor
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start development:**

   ```bash
   pnpm dev
   ```

4. **Run tests:**

   ```bash
   pnpm test
   ```

5. **Build the package:**
   ```bash
   pnpm build
   ```

## Project Structure

```
src/
├── Cursor.tsx          # Main cursor component
├── CursorProvider.tsx  # Context provider
├── types.ts            # TypeScript definitions
├── cursor.css          # Component styles
├── fonts/              # Font files (e.g., armsadam.ttf)
└── index.ts            # Main export file

playground/            # Development playground (if exists)
dist/                  # Built files
```

## Development Workflow

### Branch Naming

Use descriptive branch names:

- `feature/add-custom-variants`
- `fix/cursor-position-bug`
- `docs/update-readme`
- `refactor/improve-performance`

### Making Changes

1. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes:**

   ```bash
   pnpm test
   pnpm build
   ```

4. **Commit your changes** using conventional commits

5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

- Add tests for new features in the `__tests__` directory
- Use React Testing Library for component tests
- Ensure good test coverage for critical functionality
- Test both happy paths and edge cases

### Testing Guidelines

- Test behavior, not implementation details
- Write descriptive test names
- Use `screen.getByRole()` and semantic queries when possible
- Mock external dependencies appropriately

## Code Style

We use several tools to maintain code quality:

- **TypeScript** for type safety
- **Prettier** for code formatting
- **ESLint** for linting

### Running Code Quality Checks

```bash
# Check formatting
pnpm format:check

# Fix formatting
pnpm format

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix
```

### Style Guidelines

- Use functional components with hooks
- Prefer explicit return types for public APIs
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep components focused and single-responsibility

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) for consistent commit messages:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(cursor): add custom text support for cursor variants
fix(provider): resolve SSR hydration mismatch
docs(readme): update installation instructions
refactor(types): improve TypeScript interfaces
```

## Pull Request Process

### Before Submitting

- [ ] Tests pass locally
- [ ] Code follows style guidelines
- [ ] Documentation is updated (if needed)
- [ ] Commits follow conventional commit format
- [ ] Branch is up to date with main

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tests added/updated
- [ ] All tests pass
- [ ] Manual testing completed

## Screenshots/GIFs

(If applicable)

## Breaking Changes

(If any)

## Additional Notes

(If any)
```

### Review Process

1. **Automated checks** must pass (tests, linting, build)
2. **Code review** by maintainers
3. **Testing** of functionality
4. **Approval** and merge

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Run tests
pnpm test

# Build package
pnpm build

# Lint code
pnpm lint

# Format code
pnpm format

# Type check
pnpm type-check

# Clean build artifacts
pnpm clean
```

## Getting Help

- Check existing [issues](https://github.com/Phazr-Inc/react-custom-cursor/issues)
- Join our [discussions](https://github.com/Phazr-Inc/react-custom-cursor/discussions)
- Reach out on [Twitter](https://twitter.com/phazr_io)

## Recognition

Contributors will be recognized in:

- [`CONTRIBUTORS.md`](CONTRIBUTORS.md) file
- Release notes
- Package credits

## Questions?

Don't hesitate to ask questions! Open an issue with the `question` label or start a discussion.

Thank you for contributing to `@phazr/react-custom-cursor`! 🎉

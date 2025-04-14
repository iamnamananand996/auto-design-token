# Auto Design System Monorepo

This monorepo contains packages and applications related to the Auto Design System.

## Structure

- **packages/**: Reusable libraries and packages
  - **design-tokens/**: Design token system with CSS variables and utility classes
  
- **apps/**: Applications that consume the packages
  - **storybook/**: Storybook application to showcase design tokens and components

## Getting Started

1. Install dependencies:

```bash
yarn install
```

2. Build all packages:

```bash
yarn build
```

3. Run Storybook:

```bash
yarn storybook
```

## Available Scripts

- `yarn build`: Build all packages
- `yarn build:design-tokens`: Build only the design tokens package
- `yarn storybook`: Start the Storybook development server
- `yarn build-storybook`: Build the Storybook for deployment

## Working with the Monorepo

### Adding Dependencies

To add dependencies to a specific package or application:

```bash
yarn workspace @autonomys/design-tokens add dependency-name
# or
yarn workspace @autonomys/storybook add dependency-name --dev
```

### Creating a New Package

1. Create a new directory in the `packages/` or `apps/` directory
2. Add a `package.json` file with the appropriate name using the `@autonomys/` namespace
3. Add the package to the workspace by ensuring it follows the pattern in the root `package.json` 
# eslint-plugin-no-tsx-without-jsx

An ESLint plugin that enforces JSX presence in `.tsx` files to maintain clear file type distinctions in TypeScript projects.

## Why?

Using `.tsx` extensions for files without JSX can cause confusion and inconsistency. This plugin ensures that:

- `.tsx` files contain JSX elements
- Non-JSX files use the `.ts` extension
- Codebase remains clear and maintainable

## Installation

```bash
npm install eslint-plugin-no-tsx-without-jsx --save-dev
```

## Usage

1. Add to your ESLint configuration:

```json
{
  "plugins": ["no-tsx-without-jsx"],
  "rules": {
    "no-tsx-without-jsx/enforce-jsx": "error"
  }
}
```

2. Example valid/invalid usage:

✅ Valid (contains JSX):

```tsx
// myComponent.tsx
const MyComponent = () => <div>Hello</div>;
```

❌ Invalid (no JSX):

```tsx
// utility.tsx
export function utility() {
  return 42;
} // Should be utility.ts
```

## Inspiration

This plugin was inspired by the discussion in [jsx-eslint/eslint-plugin-react#3843](https://github.com/jsx-eslint/eslint-plugin-react/issues/3843)

## Related

- [ESLint](https://eslint.org/) - Pluggable JavaScript linter
- [TypeScript ESLint](https://typescript-eslint.io/) - TypeScript support for ESLint

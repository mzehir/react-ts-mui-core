/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser', // Instructs ESLint to use @typescript-eslint/parser to analyze TypeScript files, enabling it to understand and lint TypeScript code.
  plugins: ['simple-import-sort', 'react-refresh'],
  // simple-import-sort: A plugin used to sort imported and exported modules.
  // react-refresh: A plugin used for Hot Module Replacement (HMR) for React components.
  extends: [
    'eslint:recommended', // Includes the recommended core rules from ESLint.
    'plugin:@typescript-eslint/recommended', // Includes the recommended rules for TypeScript.
    'prettier', // Disables ESLint rules that might conflict with Prettier's formatting rules, delegating code formatting to Prettier.
    'plugin:prettier/recommended', // Includes recommended rules for Prettier and integrates it with ESLint.
    'plugin:react-hooks/recommended', // Includes recommended rules for React Hooks.
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }], // Throws an error for unused variables, except when their names start with an underscore (_). This is a common way to mark unused parameters.
    // "simple-import-sort/imports": "error", // Enforces a specific order for imported modules and reports errors if the order is incorrect.
    // "simple-import-sort/exports": "error", // Enforces a specific order for exported modules and reports errors if the order is incorrect.
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // Allows only React components to be exported, issuing a warning for other exports.
    'prettier/prettier': ['error', { singleQuote: true }], // Throws an error for using double quotes instead of single quotes.
  },
};

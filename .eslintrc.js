module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    // Add your custom rules here

    // Common ESLint rules
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',

    // React rules
    'react/prop-types': 'off', // Disable prop-types since we're using TypeScript
    'react/react-in-jsx-scope': 'off', // React 17 doesn't require importing React in every file
    'react/display-name': 'off', // Disable display-name rule, as it can interfere with higher-order components

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the installed React version
    },
  },
};
module.exports = {
  // Specifies the ESLint parser for TypeScript
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint configuration environment
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  // Extends existing configurations
  extends: [
    'eslint:recommended', // ESLint's recommended rules
    '@react-native-community', // React Native specific rules
    'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
    'plugin:react/recommended', // React recommended rules
    'plugin:react-hooks/recommended', // React Hooks rules
    'plugin:jsx-a11y/recommended', // JSX accessibility rules
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier
  ],
  // Specifies the ECMAScript features and JSX support
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  // Plugins used in this configuration
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jsx-a11y',
    'prettier',
  ],
  // Custom rules or overrides
  rules: {
    // Example: Disable a rule
    // 'no-console': 'warn',

    // Example: Enforce specific React Native styles or patterns
    // 'react-native/no-unused-styles': 'warn',

    // Prettier specific rules (usually configured through .prettierrc)
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // Handle different OS line endings
      },
    ],

    // TypeScript specific rules
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Often too strict for small projects
    '@typescript-eslint/no-explicit-any': 'off', // Allow 'any' type in some cases
    '@typescript-eslint/ban-ts-comment': 'off', // Allow @ts-ignore, @ts-expect-error etc.
    '@typescript-eslint/no-var-requires': 'off', // Allow require() statements

    // React specific rules
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+ and newer React Native versions with Babel transform
  },
  // Settings for plugins
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  // Ignore specific files or directories
  ignorePatterns: [
    'node_modules/',
    'build/',
    'dist/',
    '.expo/',
    'coverage/',
    'android/',
    'ios/',
    'web-build/',
  ],
};
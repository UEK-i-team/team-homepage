module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
  globals: {
    require: true,
    exports: true,
    module: true,
    process: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

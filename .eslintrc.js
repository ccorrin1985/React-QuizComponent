module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ["airbnb", "eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": ["off"],
    "react-hooks/rules-of-hooks": "error",
    indent: ["error", 2, { SwitchCase: 1 }],
    "comma-dangle": ["error", "always-multiline"],
    semi: ["error", "always"],
    "no-console": ["warn", { allow: ["info", "error", "dir"] }],
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: false }],
    curly: "error",
    "no-else-return": "error",
    "no-unneeded-ternary": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "one-var": ["error", "never"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    strict: "error",
    "symbol-description": "error",
    yoda: ["error", "never", { exceptRange: true }]
  }
};

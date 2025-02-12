const a11yOff = Object.keys(require("eslint-plugin-jsx-a11y").rules).reduce(
  (acc, rule) => {
    acc[`jsx-a11y/${rule}`] = "off";
    return acc;
  },
  {}
);

module.exports = {
  env: {
    browser: true
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["public/*", "dist/*", "/*.js", "/*.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "./"
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "off",
    "@typescript-eslint/no-this-alias": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-restricted-syntax": "off",
    "react/jsx-props-no-spreading": "off",
    "consistent-return": "off",
    "no-continue": "off",
    "no-eval": "off",
    "no-await-in-loop": "off",
    "no-nested-ternary": "off",
    "prefer-destructuring": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".tsx", ".jsx"] }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never"
      }
    ],
    ...a11yOff
  }
};

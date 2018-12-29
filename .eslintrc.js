module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["react", "prettier"],
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-undef": "off",
    "no-useless-escape": "off"
  }
};

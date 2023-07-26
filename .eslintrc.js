module.exports = {
  root: true,
  extends: ["@platformbuilders/eslint-config-builders"],
  ignorePatterns: ["/*", "!/src"],
  overrides: [
    {
      files: [".ts", ".tsx", ".js", ".jsx"],
      rules: {
        'react-refresh/only-export-components': 'warn',
      }
    },
    {
      files: [".spec.{ts,tsx}", ".test.{ts,tsx}", "*.api.{ts,tsx}"],
      rules: {
        'react-refresh/only-export-components': 'warn',
      }
    }
  ]
}

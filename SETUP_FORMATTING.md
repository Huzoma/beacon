# Prettier, Husky, and lint-staged Setup

This project uses Prettier for code formatting, Husky for Git hooks, and lint-staged to run formatting and linting on staged files before each commit.

## How it works
- **Prettier**: Automatically formats code according to `.prettierrc` rules.
- **Husky**: Adds Git hooks (e.g., pre-commit) to automate checks before commits.
- **lint-staged**: Runs Prettier and ESLint only on files that are staged for commit, making pre-commit checks fast.

## Usage
- On every commit, Husky will trigger lint-staged, which will run Prettier and ESLint on staged files.
- You can manually format all files with:
  ```
  npx prettier --write .
  ```

## Configuration files
- `.prettierrc`: Prettier config
- `.prettierignore`: Files/folders to ignore
- `.lintstagedrc.json`: lint-staged config
- `.husky/pre-commit`: Husky pre-commit hook

## Troubleshooting
- If hooks are not working, run:
  ```
  npm run prepare
  ```
- If you add new file types, update `.lintstagedrc.json` accordingly.

# Usage

## Run this project
To run the project, you can use the following commands in the `package.json` file:

- `build`: This script compiles the project using Webpack in production mode. It runs the command `webpack --mode production`.
- `start`: This script starts the Webpack development server. It runs the command `webpack serve --mode development`.
- `server`: This script starts a simulated JSON server using `json-server`. It uses the `db.json` file as the database and runs on port 3001. It runs the command `json-server --watch db.json --port 3001`.
- `lint`: This script performs static code analysis using ESLint. It checks for errors and violations of the defined style rules in the `.eslintrc.json` configuration file. It runs the command `eslint .`.
- `lint:fix`: This script attempts to automatically fix errors and violations of the style rules found by ESLint. It runs the command `eslint --fix`.
- `format`: This script automatically formats the source code files and other files such as CSS, Markdown, and JSON using Prettier. It uses the formatting rules defined in the `.prettierrc` configuration file. It runs the command `prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc`.


In addition, a Husky hook called `pre-commit` has been set up to run automatically before committing changes. This hook uses the `pretty-quick` tool to format the modified files in the staging area of the repository.

These commands allow you to compile the project, start the development server, start the simulated JSON server, perform static code analysis, automatically fix style errors, and format the source code files consistently before committing changes.
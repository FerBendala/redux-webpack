# Usage

## Run this project
To run the project, you can use the following commands in the `package.json` file:

- `build`: This script compiles the project using Webpack in production mode. It runs the command `webpack --mode production`.
- `start`: This script starts the Webpack development server. It runs the command `webpack serve --mode development`.
- `server`: This script starts a simulated JSON server using `json-server`. It uses the `db.json` file as the database and runs on port 3001. It runs the command `json-server --watch db.json --port 3001`.
- `lint`: This script performs static code analysis using ESLint. It checks for errors and violations of the defined style rules in the `.eslintrc.json` configuration file. It runs the command `eslint .`.
- `lint:fix`: This script attempts to automatically fix errors and violations of the style rules found by ESLint. It runs the command `eslint --fix`.
- `format`: This script automatically formats the source code files and other files such as CSS, Markdown, and JSON using Prettier. It uses the formatting rules defined in the `.prettierrc` configuration file. It runs the command `prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc`.


In addition to running these commands, it is recommended to install ESLint and Prettier extensions in Visual Studio Code and configure the following settings in VS Code's `settings.json`:

```json
// ...
"editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.tabSize": 4
},
"[python]": {
    "editor.tabSize": 4,
    "editor.formatOnType": true
}
```

These settings enable automatic formatting on save and paste, and apply ESLint and Prettier fixes on save. The configuration also sets the default formatter for JavaScript files to Prettier and sets the tab size to 4 spaces for JavaScript and Python files.

By following these instructions and using the provided commands, you can easily compile the project, start the development server, start the simulated JSON server, perform static code analysis, automatically fix style errors, and format the source code files consistently.

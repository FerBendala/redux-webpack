# Usage
## Run this project
To run the project, you can use the following commands in the `package.json` file:

-   `build`: This script compiles the project using Webpack in production mode.
-   `start`: This script starts the Webpack development server.
-   `server`: This script starts a simulated JSON server using `json-server`. It uses the `db.json` file as the database and runs on port 3001.
-   `test`: This script runs the tests using Jest. It provides verbose output, runs tests in a single process (`--runInBand`), generates test coverage, and uses the configuration specified in `jest.config.js`.
-   `lint`: This script performs static code analysis using ESLint. It checks for errors and violations of the defined style rules in the `.eslintrc.json` configuration file.
-   `lint:fix`: This script attempts to automatically fix errors and violations of the style rules found by ESLint.
-   `stats`: This script generates Webpack build statistics in production mode. It outputs the statistics in JSON format and uses the configuration specified in `webpack.config.js`.

## Connect with backend using .env
It is important to include an `.env` file with the correct values for the BACKEND_URL_PROD and BACKEND_URL_DEV variables. These variables are used in the Webpack configuration to determine the backend URL based on the environment.

```bash
BACKEND_URL_PROD='your_production_backend_url'
BACKEND_URL_DEV='your_development_backend_url'
```

Replace your_production_backend_url with the actual URL of your production backend and your_development_backend_url with the actual URL of your development backend.


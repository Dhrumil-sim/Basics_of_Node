# Express TypeScript Project Setup with ESLint, Prettier, and Jest

This guide outlines the steps to set up a Node.js project using Express and TypeScript, incorporating ESLint for code linting, Prettier for code formatting, and Jest for unit testing. This setup ensures a clean, maintainable, and well-tested codebase.

## Table of Contents

1. [Project Initialization](#1-project-initialization)
2. [Installing Dependencies](#2-installing-dependencies)
3. [Setting Up TypeScript](#3-setting-up-typescript)
4. [Configuring ESLint and Prettier](#4-configuring-eslint-and-prettier)
5. [Setting Up the Project Structure](#5-setting-up-the-project-structure)
6. [Implementing the Express Server](#6-implementing-the-express-server)
7. [Configuring Scripts](#7-configuring-scripts)
8. [Setting Up Unit Testing with Jest and Supertest](#8-setting-up-unit-testing-with-jest-and-supertest)
9. [Running the Application and Tests](#9-running-the-application-and-tests)

## 1. Project Initialization

Begin by creating a new directory for your project and initializing it with npm:

```bash
mkdir express-ts-app
cd express-ts-app
npm init -y
```

## 2. Installing Dependencies

Install Express and other necessary development dependencies:

```bash
npm install express
npm install --save-dev typescript ts-node nodemon @types/express @types/node eslint prettier jest ts-jest supertest
```

- `express`: Web framework for Node.js.
- `typescript`: TypeScript language support.
- `ts-node`: Run TypeScript directly.
- `nodemon`: Automatically restart the server during development.
- `@types/express` and `@types/node`: Type definitions for Express and Node.js.
- `eslint`: Linting tool for code quality.
- `prettier`: Code formatter.
- `jest`: Testing framework.
- `ts-jest`: TypeScript preprocessor for Jest.
- `supertest`: HTTP assertions for testing Express applications.

## 3. Setting Up TypeScript

Initialize TypeScript configuration:

```bash
npx tsc --init
```

Modify `tsconfig.json` to include the following settings:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "strict": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 4. Configuring ESLint and Prettier

### ESLint Setup

Initialize ESLint:

```bash
npx eslint --init
```

During the setup, select the following options:

- How would you like to use ESLint? → To check syntax and find problems
- What type of modules does your project use? → JavaScript modules (import/export)
- Which framework does your project use? → None of these
- Does your project use TypeScript? → Yes
- Where does your code run? → Node
- What format do you want your config file to be in? → JSON

Create a `.eslintrc.json` file with the following content:

```json
{
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "env": {
    "node": true,
    "es2021": true
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
```

### Prettier Setup

Create a `.prettierrc` file with your desired formatting rules, for example:

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all"
}
```

## 5. Setting Up the Project Structure

Organize your project with the following structure:

```
express-ts-app/
├── src/
│   └── index.ts
├── tests/
│   └── index.test.ts
├── .eslintrc.json
├── .prettierrc
├── package.json
├── tsconfig.json
└── README.md
```

## 6. Implementing the Express Server

In `src/index.ts`, implement a simple Express server:

```typescript
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app; // Export the app for testing purposes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## 7. Configuring Scripts

In `package.json`, add the following scripts:

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "nodemon src/index.ts",
  "build": "tsc",
  "lint": "eslint src/**/*.ts",
  "format": "prettier --write src/**/*.ts",
  "test": "jest"
}
```

## 8. Setting Up Unit Testing with Jest and Supertest

### Jest Setup

Initialize Jest with TypeScript support:

```bash
npx ts-jest config:init
```

Ensure your `jest.config.js` includes:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

### Writing Tests

In `tests/index.test.ts`, write a test for the Express server:

```typescript
import request from "supertest";
import app from "../src/index";

describe("GET /", () => {
  it("should return Hello World", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World!");
    expect(response.status).toBe(200);
  });
});
```

## 9. Running the Application and Tests

- **Start the Development Server:**

  ```bash
  npm run dev
  ```

  This command uses `nodemon` to start the server and automatically restarts it during development.

- **Build the Project:**

  ```bash
  npm run build
  ```

  This compiles the TypeScript code into the `dist` directory.

- **Run Linter:**

  ```bash
  npm run lint
  ```

  This checks your code for linting issues.

- **Format Code:**

  ```bash
  npm run format
  ```

  This formats your code according to Prettier's rules.

- **Run Tests:**

  ```bash
  npm test
  ```

  This runs your unit tests using Jest.

By following these steps, you can set up a Node.js project with Express and TypeScript, incorporating ESLint for code linting, Prettier for code formatting, and Jest for unit testing. This setup promotes a clean, maintainable, and well-tested codebase. 

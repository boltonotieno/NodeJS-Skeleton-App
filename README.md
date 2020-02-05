# NodeJS Skeleton App

Node application skeleton

# Description

**nodejs-skeleton-app** is a backend application skeleton to help you quick start nodejs application development.

# Table of Contents

- [Setup](#setup)
  - [Dependencies](#dependencies)
  - [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Database and ORM](#database-and-orm)
- [License](#license)


## Setup

### Dependencies

- [NodeJS](https://github.com/nodejs/node) - A JavaScript runtime environment
- [Express](https://github.com/expressjs/express) - A web application framework for NodeJS
- [Sequelize](https://github.com/sequelize/sequelize) - A promise-based ORM for NodeJS
- [Eslint](https://eslint.org/) - A linting utility for JavaScript
- [Babel](https://babeljs.io/docs/en/) - A JavaScript compiler

### Getting Started

Follow these steps to set up the project in development mode

- Install [Nodejs](https://nodejs.org/en/download/)
- Clone the repository by running the command
  ```
  git clone https://github.com/BoltC0rt3z/NodeJS-Skeleton-App.git
  ```
- Run `cd NodeJS-Skeleton-App` to enter the application's directory
- Install the application's dependencies by running the command
  ```
  npm install
  ```
- Create a `.env` file in the root of your directory using the `.env.example` file in the repository
- Start the application by running
  ```
  npm run start:dev
  ```
  The application should now be running at `http://127.0.0.1:PORT`. (replace PORT with what you have in your .env)

### Environment Variables

 Create your `.env` file in the root directory by following the `.env.example` below
  ```
    PORT=
    NODE_ENV=
    DATABASE_HOST=
    DATABASE_PASSWORD=
    DATABASE_USERNAME=
    DATABASE_NAME=
    DATABASE_PORT=
    DATABASE_DIALECT=
  ```

### Database and ORM

- Create a database in either `PostgreSQL` or `MySQL`
- Place the appropriate configs in the `.env file`
- You now go ahead and create the necessary models you have in `src/database/model` folder

## License

This application is licensed under the terms of the [MIT License](https://github.com/BoltC0rt3z/NodeJS-Skeleton-App/LICENSE)

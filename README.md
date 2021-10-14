# Simple Upload

This is just a simple demo application to upload some files and re-download them.

## Operating System

The Application should be able to run on any operating system, that is able to install [Node.js](https://nodejs.org/en/) with the package manager "npm".

## Programming Language

The used programming languages in the application are Javascript (ECMA2015), HTML5 and CSS.

## Webframework

The application is split into a frontend and a backend. They communicate over a REST API that the backend provides.

The frontend is build on [Svelte](https://svelte.dev), which is a fast modern framework. Which compiles its components to pure javascript code instead of relying on a virtual dom. That brings a high efficiency at runtime.

The backend is build with [Express](https://expressjs.com/de/), which is a minimal and flexible [Node.js](https://nodejs.org/en/) web application framework that provides a whole set of features for web applications.

## Runtime Environment

[Node.js](https://nodejs.org/en/) is the main runtime environment for the application.

## Database

To persists the uploaded data, [SQLite3](https://www.sqlite.org/index.html) is used. It's a small, fast, self-contained SQL database engine, that doesn't require an additional database server.

For an easy interaction between the backend and the database the OR-Mapper [Prisma](https://www.prisma.io/) is used. It helps by abstracting the database, so you're able to interact with representative models of the tables instead of sending raw queries to alter the database.
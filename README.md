# Simple Upload

This is just a simple demo application to upload some files and re-download them.

# Infos

## Operating Systems

Runs on any operating system, that is able to install Node.js with its package manager npm.

## Programming Language

The used languages in this project are JavaScript, HTML and CSS.

## Webframeworks

The project is seperated in a seperate front- and backend.
The frontend is build on [Svelte](https://svelte.dev), which is a fast modern framework. Which compiles its components to pure javascript code instead of relying on a virtual dom. That brings a high efficiency at runtime.

For the backend [Express](https://expressjs.com/de/) is used, which is a minimal and flexible [Node.js](https://nodejs.org/en/) web application framework that provides a whole set of features for web applications.

## Runtime Environment

[Node.js](https://nodejs.org/en/) is the main runtime environment for the application.

## Database

For persistence [SQLite3](https://www.sqlite.org/index.html) is used to store the metadata of uploaded files.
For an easy interaction between the backend and the database the OR-Mapper [Prisma](https://www.prisma.io/) is used.
# Backend Exercise

## Description

This is a backend server template that uses Node.js and Express.js to create a server that serves JSON as a response to a REST API calls. Postgresql is used as the database and Knex.js is used as the query builder. Docker is used to configure the environment and run the database.

## Instructions

**Step-1:** Fork and clone the repository.
```bash
git clone https://github.com/faiz-gh/monke-exercise.git
```

**Step-2:** Download and Install Docker Desktop from [here](https://www.docker.com/products/docker-desktop).

**Step-3:** After installing Docker Desktop, open the terminal and go to the project directory.
```bash
cd monke-exercise
```

**Step-4:** Run the following command to pull the node image from docker hub.
```bash
docker pull node:lts-alpine3.18
```

**Step-5:** Run the following command to build and run the postgres database.
```bash
docker-compose up --build -d
```

## Tips

* The server runs on http://localhost:3000.
* You can access the database cli by running the following command:
```bash
    npm run db
```
* You can access the node server cli by running the following command:
```bash
    npm run server
```
* You can access the database using the following credentials:
```bash
    host: db
    username: admin
    password: 12345678
    database: monke
```
* You can create a new migration using the following command:
```bash
    knex migrate:make migration-name
```
* You can rollback the migrations using the following command:
```bash
    knex migrate:rollback
```

Hope you find the template helpful. Happy Coding!
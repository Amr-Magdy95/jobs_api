<h1 align="center">
  
  <img  src="Jobs_API.png" />
  
</h1>
<h2>An API , built with <strong>NodeJS</strong>, <strong>ExpressJS</strong> and <strong>MongoDB</strong>, for saving jobs for future reference.</h2>
<p align="center">
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a><a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
</p>
<h3 align="center"><a href="https://jobs-app.adaptable.app/" taget="blank">Live App</a></h3>

<h3>Brief Summary of the Project</h3>

- Used **NodeJS** and **ExpressJS** to build the server, routes and listen for requests.
- Utilized **Mongoose** and **MongoDB** to build the _Jobs_ and _User_ Models.
- Managed to use **express-async-errors** to handle async errors thrown through the _controllers_.
- Used **bcryptjs** and **jsonwebtoken** to handle _user login_ and _register_.

---

## Installation

1. Clone the repository to your localmachine
   > `git clone https://github.com/Amr-Magdy95/jobs_api`
2. Change the directory to that of the project
   > `cd jobs_api`
3. Create .env file and insert MONGO_URI, JWT_SECRET and JWT_LIFETIME inside of it
4. Install all packages
   > `npm i`
5. Run the development server and expect the server to run on port 5000
   > `npm run dev`

---

## Routes and How to Use

> In order to **Register** a **User**, you should provide _(name, email, password)_

> In order to **Login** a **User**, you should provide _(email, password)_

| HTTP Verb | Route                 | Usage                       |
| :-------: | --------------------- | --------------------------- |
|   POST    | /api/v1/auth/register | Registering a new user      |
|   POST    | /api/v1/auth/login    | Logging in an existing user |

> In order to use the **Jobs** routes, you should provide an authorization bearer token.

> In order to use **POST**, **PATCH** you should _insert_ _(company, position)_

| HTTP Verb | Route            | Usage                 |
| :-------: | ---------------- | --------------------- |
|    GET    | /api/v1/jobs     | Getting all jobs      |
|   POST    | /api/v1/jobs     | Adding a new job      |
|    GET    | /api/v1/jobs/:id | Getting a single job  |
|  DELETE   | /api/v1/jobs/:id | Deleting a single job |
|   PATCH   | /api/v1/jobs/:id | Updating a single job |

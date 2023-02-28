# Annalise.ai challenge

Hi! This repository contains my submission to the Annalise fullstack challenge, built with the MERN stack with typescript.  

The project contains basic CRUD functionalities:
-   Create new colour
-   Delete colours
-   View a list of colours
-   Signup
-   SignIn
-   SignOut

## Technologies used
- React/Typescript
- Express.js
- Nodejs
- MongoDB
- Docker

### Architecture

      ├─client               # frontend folder
      │  ├─src               # frontend src
      │  │  ├─api
      │  │  ├─styles
      │  │  ├─utils
      │  │  ├─components     # app components
      |  |  |-index.tsx
      |
      └─server               # server folder
         └─src               # server src
            ├─api            # server api list
            │  ├─auth        # completely token-based authentication
            │  ├─thing
            │  └─user
            ├─controllers    # Controllers
            ├     ├─auth
            │     └─colours
            ├─interfaces    # interfaces
            ├     ├─user
            │     └─colour
            ├─models    # models
            ├     ├─user
            │     └─colour
            ├─middleware    # middleware
            ├     ├─auth
            ├─config         # server configurations
            │  ├─auth.config # default server port, mongo uri, etc settings
            │  ├─db          # security settins
            indes.ts        # main file after entry
            └─routes         # router
                  ├─auth
            │     └─colours


      

## Prerequisites

- MongoDB
- Express 
- Vue
- Node
- Bootstrap
- React
- Docker

## Installation

#### Backend

1. Clone the repository.

```
 git clone https://github.com/NourdineMazali/nodejs-react-challenge.git
```

2. In the root directory, go to the backend folder.

```
cd server
```

3. Install server dependencies.

```
npm install
```

4. Add `.env` file, then copy and edit the below variables into the env file to spin up the database.

PS: .env for server file included in the repo to streamline running the app, normally the file will not be included

```
JWT_SECRET=<YOUR JWT SECRET>
PORT=4000
```

#### Frontend

1. In the root directory, go to the frontend folder.

```
cd client
```

2. Install client dependencies.

```
npm install
```

3. Update the `baseUrl` variable in `/api/api.ts` to your desired `localhost` url, for example:

```typescript
const baseUrl: string = "http://localhost:4000";
```

Now you have all the prerequesites to run the application in development enviroment.


## Running with docker
In the root folder:
1. Add a ```.env``` file similar to above
2. ```docker-compose build```
3. ```docker-compose up -d```
4. Go to ```localhost:3000```

## Alternatively running the application locally

1. In the server folder, start the server.

```
npm start
```
2. Install client dependencies.

```
npm install
```

3. In the frontend folder, start the React client.

```
npm start
```

3. Go to the `localhost` you previously defined on the above step 3 to use the application.
## Run backend tests

In the server folder, run:

```
npm test
```
## To-do list:

Add Integration tests to Frontend

Move all Server domains paths to constant file

Add auth Middleware Mock

UI Alerts



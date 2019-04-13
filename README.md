This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm run start-node`
### `npm start`

Create table in pgAdmin:

CREATE TABLE todo(
    id SERIAL UNIQUE PRIMARY KEY,
    task TEXT,
    completed BOOLEAN
    );

Adjust pool in server.js if necessary.
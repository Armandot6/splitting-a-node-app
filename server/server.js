/* jshint esversion: 6 */
const express = require('express');
const chalk = require('chalk');
const massive = require('massive');

const app = express();

let db;

app.use(express.static(__dirname + '/../public'));

massive('postgres://postgres#12345@localhost/testDb')
    .then(dbInstance => db = dbInstance);

app.get('/user/:id', (req, res) => {
    // search db and send user back
});

app.post('/register', (req, res) => {
    // create new user, add to database
});

app.delete('/user/:id', (req, res) => {
    // look user up by id and remove from db
});

app.listen(8084, () => {
    console.log(`${ chalk.green('app running and listening at') } ${ chalk.cyan('localhost:8084') }`);
});
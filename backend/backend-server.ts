import {MockTeams} from "./data/teams";
const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(parser.json());

app.get('/api/teams.json', (req, res) => {
  res.send(MockTeams);
});

app.listen(3000);

console.log('Backend server is running.');

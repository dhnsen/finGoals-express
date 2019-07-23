const express = require('express');
const ejs = require('express-ejs-layouts');
const path = require('path');
const goals = require('savingsGoalController');

const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/img', express.static(path.join(__dirname, '/public/img')));

app.get('/', (req, res, next) => {
    res.render(path.join(__dirname + '/views/index'), {msg:''});
});

app.listen(port, console.log('listening on port ' + port));
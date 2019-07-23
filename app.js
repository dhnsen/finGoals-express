const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(path.join(__dirname + '/views/index'));
});

app.listen(port, () => console.log('listening on port ' + port));
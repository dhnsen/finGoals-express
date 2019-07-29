const http = require('http');

let goals;

const options = {
    host: 'localhost',
    port: 5000,
    path: '/api/SavingsGoal',
    method: 'GET'
};

http.request(options, function (res) {
    var body = '';

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {
        goals = JSON.parse(body);
        console.log(goals)
    })
}).end();

module.exports = goals;
const axios = require('axios');

const uri = "http://localhost:5000/api/SavingsGoal";

const getGoals = function (userName) {
    return axios.get(uri)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {

        });
};
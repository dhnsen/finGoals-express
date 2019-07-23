const goals = require('../controllers/savingsGoalController');

test('savingsGoalController.getGoals()', () => {
    expect(goals.getGoals).toEqual(
        {"id":1,
        "userId":null,
        "name":"First Goal",
        "amount":1.0,
        "description":"This is your first Savings Goal",
        "isComplete":false
    });
})
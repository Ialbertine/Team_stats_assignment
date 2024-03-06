/*
Let’s make a data structure to store the information about our team. 
Declare a const variable called team and set it to an empty object.
*/
const team = {};

team._players = [];
team._games = [];

team._players.push({
    firstName: 'Lebron',
    lastName: 'James',
    age: 39
},
{
    firstName: 'Anthony',
    lastName: 'Davis',
    age: 30
},
{
    firstName: 'Jarred',
    lastName: 'Vanderbilt',
    age: 24
});

team._games.push({
    opponent: 'Lakers',
    teamPoints: 177,
    opponentPoints: 100
},
{
    opponent: 'Eagles',
    teamPoints: 100,
    opponentPoints: 90
},
{
    opponent: 'Tigers',
    teamPoints: 102,
    opponentPoints: 90
});

// getter method called players to retrieve the _players property.
team.players = function () {
    return this._players;
};

// getter method called games to retrieve the _games property.
team.games = function () {
    return this._games;
};

team.addPlayer = function (newFirstName, newLastName, newAge) {
    const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
    };
    this._players.push(newPlayer);
};

team.addPlayer('Hank', 'Acheson', 40);
for (const player of team._players) {
    console.log(`Player: ${player.firstName} ${player.lastName}, Age: ${player.age}`);
}

// Create a method for adding game results called addGame.
team.addGame = function (newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
    };
    this._games.push(newGame);
};

team.addGame('Titans', 98, 90);
for (const game of team._games) {
    console.log(`Opponent: ${game.opponent}, Team Points: ${game.teamPoints}, Opponent Points: ${game.opponentPoints}`);
}
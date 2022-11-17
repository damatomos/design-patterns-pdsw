const { GameManagerSingleton } = require("../manager/gamemanager.manager");

console.log(GameManagerSingleton.getInstance());
console.log(GameManagerSingleton.getInstance());
console.log(GameManagerSingleton.getInstance());
console.log(new GameManagerSingleton());
const { v4: uuidv4 } = require('uuid');


class GameManagerSingleton
{
  constructor()
  {
    if (GameManagerSingleton.instance === undefined || GameManagerSingleton.instance)
    {
      throw new Error("Não pode instanciar dessa classe.");
    }
    this.id = uuidv4();
  }

  static getInstance()
  {
    if (!GameManagerSingleton.instance) {
      GameManagerSingleton.instance = null;
      GameManagerSingleton.instance = new GameManager();
    }
    return GameManagerSingleton.instance;
  }

  addScore(score)
  {
    // save score on db
  }

  removeScore(score)
  {
    // remove score on db
  }

  getScore()
  {
    // show score
  }

}

class GameManager
{
  constructor()
  {
    this.id = uuidv4();
  }

  addScore(score)
  {
    // save score on db
  }

  removeScore(score)
  {
    // remove score on db
  }

  getScore()
  {
    // show score
  }
}

module.exports = {
  GameManager,
  GameManagerSingleton
}
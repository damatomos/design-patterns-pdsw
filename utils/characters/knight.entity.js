const Character = require('./character.entity');

module.exports = class Knight extends Character
{
  constructor(player)
  {
    super(`(${player}) Knight`, 100, 20, 0, "sword");
  }

  attack()
  {
    return super.attack(this.force);
  }
}
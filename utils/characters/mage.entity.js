const Character = require('./character.entity');

module.exports = class Mage extends Character
{
  constructor(player)
  {
    super(`(${player}) Mage`, 100, 50, 50, "staff");
  }

  attack()
  {
    return super.attack(this.magic_power);
  }
}
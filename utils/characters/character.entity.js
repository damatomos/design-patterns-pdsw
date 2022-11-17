module.exports = class Character
{
  constructor(type="Character", health = 100, force = 0,magic_power=0, weapon=undefined) 
  {
    this.type = type;
    this.health = health;
    this.force = force;
    this.magic_power = magic_power;
    this.weapon = weapon;
    this.live = true;
  }

  attack(damage)
  {
    console.log(`${this.type} attack with ${damage} damage.`);
    return damage;
  }

  hit(character)
  {
    if ( character instanceof Character )
    {
      console.log(`${this.type} hit ${character.type}.`);
      character.damage(this.attack());
    }
  }

  damage(damage)
  {
    this.health -= damage;
    if (this.health <= 0) this.die();
  }

  defend(character)
  {
    if (character instanceof Character) console.log(`${this.type} defends of ${character.type}`);
  }

  die()
  {
    console.log(`${this.type} died.`);
    this.live = false;
  }

}
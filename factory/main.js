const { CharacterDef } = require("../characters/factory/character.factory");
const Knight = require("../characters/knight.entity");
const Mage = require("../characters/mage.entity");

function battle(first_type, second_type)
{
  if (!first_type || !second_type) return;

  let player1 = null;
  let player2 = null;
  switch(first_type)
  {
    case CharacterDef.KNIGHT: 
      player1 = new Knight("01");
    break;
    case CharacterDef.MAGE:
      player1 = new Mage("01");
    break;
    default:
      player1 = new Knight("01");
    break;
  }

  switch(second_type)
  {
    case CharacterDef.KNIGHT: 
      player2 = new Knight("02");
    break;
    case CharacterDef.MAGE:
      player2 = new Mage("02");
    break;
    default:
      player2 = new Knight("02");
    break;
  }

  if (player1 && player2)
  {
    while(player1.live && player2.live)
    {
      const value = Math.floor(Math.random() * 2);
      console.log('-----------------------------------------|');
      value === 0 ? player1.hit(player2) : player2.hit(player1);
      console.log('-----------------------------------------|');
    }
  }

}

function select()
{
  const value = Math.floor(Math.random() * 2);
  return value == 0 ? CharacterDef.KNIGHT: CharacterDef.MAGE;
}

function main()
{
  battle(select(), select());
}

main();
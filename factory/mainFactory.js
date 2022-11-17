const { CharacterDef, CharacterFactory } = require("../characters/factory/character.factory");

function battle(first_type, second_type)
{
  if (!first_type || !second_type) return;

  let player1 = CharacterFactory.create(first_type, "01");
  let player2 = CharacterFactory.create(second_type, "02");

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
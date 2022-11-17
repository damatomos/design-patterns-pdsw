const Knight = require("../knight.entity");
const Mage = require("../mage.entity");

const CharacterDef = {
  KNIGHT: 'knight',
  MAGE: 'mage',
}

class CharacterFactory 
{
  static create(character_def, tag)
  {
    let player = null;

    switch(character_def)
    {
      case CharacterDef.KNIGHT: 
        player = new Knight(tag);
      break;
      case CharacterDef.MAGE:
        player = new Mage(tag);
      break;
      default:
        player = new Knight(tag);
      break;
    }

    return player;
  }
}

module.exports = {
  CharacterFactory,
  CharacterDef,
}
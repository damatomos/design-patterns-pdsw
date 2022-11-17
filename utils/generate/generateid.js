const bycript = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

class GenerateIDStrategy
{

  constructor(strategy)
  {
    this.strategy = strategy;
  }

  setStrategy(strategy)
  {
    this.strategy = strategy;
  }

  generate()
  {
    return this.strategy.generate();
  }

}

class UUIDStrategy
{
  generate()
  {
    return uuidv4();
  }
}

class HASHStrategy
{
  generate()
  {
    const salt = bycript.genSaltSync(10);
    const hash = bycript.hashSync('userid', salt);
    return hash;
  }
}

module.exports = {
  GenerateIDStrategy,
  HASHStrategy,
  UUIDStrategy,
}
const { GenerateIDStrategy, UUIDStrategy, HASHStrategy } = require("../utils/generate/generateid");


function generateUser(name, email, strategy = new UUIDStrategy())
{
  return {
    id: new GenerateIDStrategy(strategy).generate(),
    name,
    email,
  }
}

console.log(generateUser('batata', 'batata@gmail.com', new HASHStrategy()))

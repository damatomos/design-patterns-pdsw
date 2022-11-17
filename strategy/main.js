const bycript = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

function generateUserHASH(name, email)
{
  return {
    id: HASH(),
    name,
    email,
  }
}

function generateUserUUID(name, email)
{
  return {
    id: UUID(),
    name,
    email,
  }
}

function HASH()
{
  const salt = bycript.genSaltSync(10);
  const hash = bycript.hashSync('userid', salt);
  return hash;
}

function UUID()
{
  return uuidv4();
}

console.log(generateUserUUID('batata', 'batata@gmail.com'))
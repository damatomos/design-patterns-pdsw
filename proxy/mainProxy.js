const { ProductDatabaseProxy } = require("../database/products.database");

async function run()
{
  const db = new ProductDatabaseProxy();

  try {
    console.log(await db.find(1));
    console.log(await db.find(2));
    console.log(await db.find(3));
    console.log(await db.find(2));
    console.log(await db.find(1));
  } catch (err)
  {
    console.log(err);
  }
}

run();
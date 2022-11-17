class ProductDatabase
{
  constructor()
  {
    this.products = [
      {
       id: 1,
       name: 'Caneta', 
      },
      {
        id: 2,
        name: 'Tesoura', 
      },
      {
        id: 3,
        name: 'Livro', 
      },
      {
        id: 4,
        name: 'Carteira', 
      },
      {
        id: 5,
        name: 'Lápis', 
      }
    ];
  }

  async find(id)
  {
    const p = new Promise((res, rej) => {
      console.log('searching...');
      setTimeout(res, 2000, this.products.find((product) => product.id == id));
    })
    return await Promise.resolve(p);
  }
}

class ProductDatabaseProxy
{
  constructor()
  {
    this.db = new ProductDatabase();
    this.cache = [];
  }

  async find(id)
  {
    let result = this.cache.find((value) => value.id == id);
    if (result) return result;

    result = await this.db.find(id);
    if (result) this.cache.push(result);
    return result;
  }
}

module.exports = {
  ProductDatabase,
  ProductDatabaseProxy
}
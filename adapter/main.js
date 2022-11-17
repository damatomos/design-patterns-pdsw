const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  {
    dialect: 'sqlite',
    storage: './db/database.sqlite',
  }
)

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();


class Database
{
  constructor()
  {
    
  }
}
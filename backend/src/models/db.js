const Sequelize = require('sequelize')

const sequelize = new Sequelize('racing', 'root', 'amocafeina',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

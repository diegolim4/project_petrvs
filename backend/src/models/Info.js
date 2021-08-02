const db = require('./db')

const Info = db.sequelize.define('race',{

    city:{
        type: db.Sequelize.STRING
    },

    circuit:{
        type: db.Sequelize.STRING
    },

    date:{
        type: db.Sequelize.INTEGER
    },

    hour:{
        type:db.Sequelize.INTEGER
    }
})

/*Info.sync({ force: true }).then(()=>console.log('criado')
).catch((erro)=>console.log('O erro foi ' +erro))*/

module.exports = Info

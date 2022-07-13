const dbConfig = require('../config/dbconfig')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.DIALECT,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.users = require('../models/user.model')(db.sequelize, db.Sequelize)
db.consults = require('../models/consult.model')(db.sequelize, db.Sequelize)
db.pacis = require('../models/paci.model')(db.sequelize, db.Sequelize)

db.pacis.hasMany(db.consults, { as: "consult"})
db.users.hasMany(db.consults, { as: "consult"})
db.consults.belongsTo(db.users && db.pacis, {
    foreignKey: "userId",
    as: "user",
    foreignKey: "paciId",
    as: "paci",
})

const run = async() =>{
}

db.sequelize.sync({force: true}).then(() => {
    console.log("Updating");
    run()
})

module.exports = db
const dotenv = require('dotenv')
const { Sequelize } = require('sequelize')

dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,{
        host : process.env.DB_HOST,
        dialect : 'mysql',
        logging : false,
        pool : { max : 10, min : 0, acquire : 30000, idle : 10000 }
    }
)

sequelize.authenticate()
    .then(()=> console.log("Db connected"))
    .catch(()=> console.error("Database connection error"+error))

module.exports = sequelize
// Імпортуємо данні з .env
const {Sequelize} = require('sequelize');

module.exports = new Sequelize(

    // юзер бази данних
    process.env.DB_NAME,
    // логін бази данних
    process.env.DB_USER,
    // пароль бази данних
    process.env.DB_PASSWORD,
    {
        // назва бази
        dialect: 'postgres',
        // хоста бази данних
        host: process.env.DB_HOST,
        // порт бази данних
        port: process.env.DB_PORT 
    }
)
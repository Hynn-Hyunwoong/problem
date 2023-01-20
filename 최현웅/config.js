const dotenv = require('dotenv').config();
const config = {
    db : {
        development : {
            database : process.env.DB_DATABASE|| "test",
            username : process.env.DB_USER || "test",
            password : process.env.DB_PASSWORD || "test",
            host : process.env.DB_HOST || "test",
            port: process.env.DB_PORT || "test",
            dialect : "mysql",
            define : {
                freezeTableName : true,
                timestamps : true,
            }
        },
        test : {
            database : process.env.DB_DATABASE_TEST || "test",
            username : process.env.DB_USER || "test",
            password : process.env.DB_PASSWORD || "test",
            host : process.env.DB_HOST || "test",
            port: process.env.DB_PORT || "test",
            dialect : "mysql",
            define : {
                freezeTableName : true,
                timestamps : true,
               }
            }   
    }
}

module.exports = config

// console.log("123",process.env);
// console.log("87", config.db)
// console.log("de", config)
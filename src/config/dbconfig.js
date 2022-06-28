module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "senai",
    DB: "users_ally",
    DIALECT: "postgres",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
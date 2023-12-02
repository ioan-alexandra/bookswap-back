module.exports = {
    HOST: "studmysql01.fhict.local",
    USER: "dbi429690",
    PASSWORD: "12345",
    DB: "dbi429690",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
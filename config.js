// dev mode creds
module.exports = {
    db: {
        user: 'root',
        password: "Password1!",
        database: "test",
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {}
    },
    port: process.env.PORT || 3000
}

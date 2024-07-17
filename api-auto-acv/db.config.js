// module.exports = {
//     hostname: process.env.DB_HOST || 'localhost',
//     username: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || 'root',
//     database: process.env.DB_NAME || 'autoacvdatabase',
//     port: 3306
// }
module.exports = {
    dialect : "sqlite",
    storage: "./my-db.sqlite",
}
//les donées si dessus seront a adapter en fonction de la configuration du serveur nginx


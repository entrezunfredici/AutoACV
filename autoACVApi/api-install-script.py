import os
print("========================================================================")
print("bienvennue dans le script de creation d'api")
print("execution de la commande ⇒ npm init")
os.system("npm init")
commands= {
    "npm install express",
    "npm install nodemon --save-dev",
    "npm install sequelize",
    "npm install mysql2",
    "npm install sqlite3",
    "npm install --save-dev jest supertest",
    "npm install bcrypt",
    "npm install http-errors",
    "npm install jsonwebtoken",
    "npm install express-openapi-validator"
    "npm install --save node-cron"
}
for command in commands:
    print("execution de la commande ⇒  "+command)
    os.system(command)
print("========================================================================")
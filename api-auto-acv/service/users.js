const { usersModel } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { NotFound, NotLogged, BadRequest, ServerError } = require('../errors');

//get user by username
exports.getUserByID = async (id) => {
    return await usersModel.findOne({
        where:{
            id_Users: id
        }
    });
}

//get user by username
exports.getUserByUsername = async (username) => {
    return await usersModel.findOne({
        where: {
            username: username
        },
        attributes: { exclude: ['password'] }
    })
}

exports.getUserByUsernameWithPassword = async (username) => {
    return await usersModel.findOne({
        where: {
            username
        }
    })
}

//add user
exports.addUser = async (username, password, mail, admin) => {
    console.log(username, password, mail, admin)
    const existingUser = await this.getUserByUsername(username)
    if (existingUser) {
        return next(createError(401, 'user already exists'));
    }
    return bcrypt.hash(password, 10).then((hash) => {
        return usersModel.create({
            username: username,
            password: hash,
            mail: mail,
            admin: admin
        })
    }).catch((e) => {
        res.status(500).json({success: false, message: e.message});
    })
}

//update user
exports.updateUser = async (id, username, mail, admin) => {
    const modifiedUser = await this.getUserByID(id);
    modifiedUser.update({
        username: username,
        mail: mail,
        admin: admin
    });
    return this.createToken(user);
}

//change user password
exports.changePasswrod = async (id, password) => {
    const modifiedUser = await this.getUserByID(id);
    return bcrypt.hash(password, 10, async (err, hash) => {
        modifiedUser.update({
            password: hash
        });
    });
}

//login 
exports.login = async (username, password) => {
    const user = await this.getUserByUsernameWithPassword(username);
    if(!user){
        throw new NotFound('no user found for username: ' + username);
    }
    const verifiedUser = await bcrypt.compare(password, user.password);
    console.log(verifiedUser)
    if (!verifiedUser) {
        throw new NotFound('no user found for username: ' + username);
    }
    return this.createToken(user);
}

//create token
exports.createToken = (user) => {
    if (!process.env.SECRET) {
        throw new Error('SECRET environment variable is not defined');
    }
    return jwt.sign({
        data: {
            id_Users: user.id_Users,
            username: user.username,
            admin: user.admin
        }
    }, process.env.SECRET, { 
        expiresIn: '30s'
    })
}

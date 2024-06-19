const { users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//get user by username
exports.getUserByID = async (id) => {
    return await users.findOne({
        where:{
            id_Users: id
        }
    });
}

//get user by username
exports.getUserByUsername = async (username) => {
    return await users.findOne({
        where: {
            username
        },
        attributes: { exclude: ['password'] }
    })
}

exports.getUserByUsernameWithPassword = async (username) => {
    return await users.findOne({
        where: {
            username
        }
    })
}

//add user
exports.addUser = async (username, password, email, admin) => {
    const existingUser = await this.getUserByUsername(username)
    if (existingUser) {
        return next(createError(401, 'user already exists'));
    }
    return bcrypt.hash(password, 10).then((hash) => {
        return users.create({
            username: username,
            password: hash,
            email: email,
            admin: admin
        })
    }).catch((e) => {
        return next(createError(500, e));
    })
}

//update user
exports.updateUser = async (id, username, email, admin) => {
    const modifiedUser = await this.getUserByID(id);
    modifiedUser.update({
        username: username,
        email: email,
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
    const user = await this.getUserByUsername(username);
    if(!user){
        return next(createError(404, 'user not found'));
    }
    return bcrypt.compare(password, user.password, (err, res) => {
        if(res){
            return this.createToken(user);
        }
        return next(createError(400, 'Cannot register user'));
    });
}

//create token
exports.createToken = (user) => {
    if (!process.env.SECRET){
        return false;
    }
    return jwt.sign({
        id_Users: user.id_Users,
        username: user.username,
        admin: user.admin
    }, process.env.SECRET, { 
        expiresIn: '30s'
    })
}

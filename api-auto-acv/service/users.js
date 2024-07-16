const { usersModel } = require('../models');
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
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

exports.addUser = async (username, password, mail, admin) => {
    const existingUser = await this.getUserByUsername(username);
    if (existingUser) {
        throw new Error('User already exists');
    }
    try {
        const hash = await bcrypt.hash(password, 10);
        return await usersModel.create({
            username: username,
            password: hash,
            mail: mail,
            admin: admin
        });
    } catch (e) {
        throw new Error(e.message);
    }
}

//update user
exports.updateUserById = async (id, username, mail, admin) => {
    const modifiedUser = await this.getUserByID(id);
    if(!modifiedUser){
        throw new NotFound('User not found');
    }
    modifiedUser.update({
        username: username,
        mail: mail,
        admin: admin
    });
    return this.createToken(modifiedUser);
}

//change user password
exports.updatePassword = async (id, password) => {
    const modifiedUser = await this.getUserByID(id);
    if (!modifiedUser) {
        throw new NotFound('User not found');
    }
    try {
        const hash = await bcrypt.hash(password, 10);
        await modifiedUser.update({ password: hash });
        return modifiedUser;
    } catch (e) {
        throw new Error(e.message);
    }
}

//login 
exports.login = async (username, password) => {
    const user = await this.getUserByUsernameWithPassword(username);
    if(!user){
        throw new NotFound('invalid logins');
    }
    const verifiedUser = await bcrypt.compare(password, user.password);
    if (!verifiedUser) {
        throw new NotFound('invalid logins');
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

exports.deleteUserById = async (id) => {
    try{
        await usersModel.destroy({
            where:{
                id_Users: id
            }
        });
        return true;
    }catch(e){
        throw new ServerError(e.message);
    }
}

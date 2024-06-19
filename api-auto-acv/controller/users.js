const usersService = require('../service/users');
const jwt = require('jsonwebtoken');

exports.authMiddleware = async (req, res, next) => {
    if (req.headers && !req.headers.authorization) {
        res.status(401).json({success: false, message: 'You need to be authenticated'});
    } else {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = await jwt.verify(token, process.env.SECRET);
            if (decodedToken) {
                next();
            } else {
                next(createError(401, 'Authentication is no more valid'))
            }
        } catch(e) {
            next(e);
        }
    }
}

exports.register = async (req, res, next) => {
    const {username, password, email} = req.body;
    try {
        const user = await usersService.addUser(username, password, email)
        if (!user) {
            return next(createError(404, 'Cannot register user'));
        }
        return res.status(201).json(true).send()
    } catch(error) {
        return next(createError(500, error));
    }
}

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const token = await usersService.login(username, password);
        if (token) {
            return res.status(200).json({ success: true, token });
        }
        return res.status(400).json({ success: false, token: ''});
    } catch(error) {
        return next(createError(500, error));
    }
};

exports.getUserByUsername = async (req, res) => {
    try {
        const user = await usersService.getUserByUsername(req.params.username);
        if (!user) {
            res.status(404).json({success: false, message: 'User not found'});
        } else {
            res.status(200).json({success: true, user});
        }
    } catch(e) {
        res.status(500).json({success: false, message: e.message});
    }
}

exports.getUsersByID = async (req, res) => {
    try {
        const user = await usersService.getUserByID(req.params.id);
        if (!user) {
            res.status(404).json({success: false, message: 'User not found'});
        } else {
            res.status(200).json({success: true, user});
        }
    } catch(e) {
        res.status(500).json({success: false, message: e.message});
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await usersService.deleteUser(req.params.id);
        if (!user) {
            res.status(404).json({success: false, message: 'User not found'});
        } else {
            res.status(200).json({success: true, message: "user deleted"});
        }
    } catch(e) {
        res.status(500).json({success: false, message: e.message});
    }
}

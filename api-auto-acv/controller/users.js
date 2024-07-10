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
                next("ok");
            } else {
                next(createError(401, 'Authentication is no more valid'))
            }
        } catch(e) {
            next(e);
        }
    }
}

exports.register = async (req, res, next) => {
    const { username, password, mail } = req.body;
    try {
        const user = await usersService.addUser(username, password, mail, false);
        if (!user) {
            return next(new Error('Cannot register user'));
        }
        return res.status(201).json({success: true, message: "user added"});
    } catch (error) {
        return next(error);
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
        res.status(500).json({success: false, message: error.message});
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

exports.updateUserById = async (req, res, next) => {
    const {username, mail, admin} = req.body;
    try {
        if(!username || !mail) {
            res.status(400).json({success: false, message: "Un champs essentiels n'est pas présent ou incorrect (username, password, mail)"});
        }
        const user = await usersService.updateUserById(req.params.id, username, mail, admin);
        if (!user) {
            res.status(404).json({success: false, message: "User not found"});
        } else {
            res.status(200).json({success: true, user});
        }
    } catch(e) {
        res.status(500).json({success: false, message: e.message});
    }
}

exports.updatePassword = async (req, res, next) => {
    const { password } = req.body;
    try {
        if (!password) {
            return res.status(400).json({ success: false, message: "Password is required" });
        }
        const user = await usersService.updatePassword(req.params.id, password);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, message: "password updated"});
    } catch (e) {
        return next(e);
    }
}

exports.deleteUserById = async (req, res) => {
    try {
        const user = await usersService.deleteUserById(req.params.id);
        if (!user) {
            res.status(404).json({success: false, message: 'User not found'});
        } else {
            res.status(200).json({success: true, message: "user deleted"});
        }
    } catch(e) {
        res.status(500).json({success: false, message: e.message});
    }
}

'use strict'

const AccessService = require('../services/access.service');

class AccessController {
    signUp = async (req, res, next) => {
        try {
            console.log(`[AccessController][signUp]`, req.body);
            console.log("AccessService", AccessService);
            return res.status(201).json(await AccessService.signUp(req.body));
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new AccessController();
'use strict'

class AccessController {
    signUp = async (req, res, next) => {
        try {
            console.log(`[AccessController][signUp]`, req.body);
            return res.status(201).json({
                code: '20001',
                metadata: { userId: 1 }
            });
        } catch (error) {
            console.error(object);
        }
    }
}

module.exports = new AccessController();
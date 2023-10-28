'use strict'

const shopModel = require('../models/shop.model');
const bycrypt = require('bcrypt');
const crypto = require('crypto');

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER', // in real project should be like "writer001xxxx"
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN',
}

class AccessService {
    static signUp = async ({ name, email, password }) => {
        try {
            // step 1: check if user exists
            const holderShop = await shopModel.findOne({ email }).lean();
            if (holderShop) {
                return {
                    code: '40001',
                    message: 'Shop already exists',
                }
            }

            const passwordHash = await bycrypt.hash(password, 10);
            // step 2: create user
            const newShop = await shopModel.create({
                name,
                email,
                password: passwordHash,
                roles: [RoleShop.SHOP]
            });

            if(newShop) {
                // create private key, public key
                const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096
                });

                console.log({ privateKey, publicKey });
            }

            return {
                code: '20001',
                metadata: {
                }
            }
        } catch (error) {
            return {
                code: '50001',
                message: error
            }
        }
    }
}

module.exports = new AccessService();

// register 
// login
// logout

const Joi = require('joi');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Joi schema
const registerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})

const generateToken = (getId) => {
    return jwt.sign({ id: getId}, 'DEFAULT_SECRET_KEY', {
        expiresIn: 3*24*60*60
    })
}

// REGISTER
const registerUser = async (req, res) => {
    try {
        // 1. validate input
        const {error} = registerSchema.validate(req.body);

        if(error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }

       const { name, password } = req.body;
       const email = req.body.email.toLowerCase().trim();

        // 2. check if user exists
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already registered",
            })
        }

        // 3. hash password
        const hashedPassword = await bcrypt.hash(password,10);

        // 4. create user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        // 5. generate token
        const token = generateToken(newUser._id);

        res.cookie('token', token, {
            httpOnly: false,
        })

        // 6. response
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            }
        })


    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}

module.exports = {registerUser}
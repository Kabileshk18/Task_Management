const bcrypt = require('bcryptjs')
const path = require('path')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const User = require(path.join(__dirname,'..','models','User.js'))

dotenv.config()

const register = async(req, res) => {
    try {
        const { name, email, password, role } = req.body
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields required"})
        }
        const available = await User.findOne({ where : {email}})
        if(available){
            return res.status(400).json({message:"User already exist"})
        } 
        const hashedPassword = await bcrypt.hash(password, 10)
        const result = await User.create({name, email, password : hashedPassword, role : role || 'user'})
        return res.status(201).json({ id:result.id, message:"User created successfully"})
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

const login = async(req, res) => {
    try {
        const { email, password } = req.body
        if(!email || !password ){
            return res.status(400).json({message:"All fields required"})
        }
        const available = await User.findOne({ where : {email}})
        if(!available){
            return res.status(400).json({message:"No user found, Please register user"})
        }
        const verify = await bcrypt.compare(password, available.password)
        if(!verify){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const token = jwt.sign({id:available.id, role:available.role},process.env.JWT_PASS, {expiresIn : process.env.JWT_EXPIRES_IN })
        res.json({message:"Login Successfully",token})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = { register, login }
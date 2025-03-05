const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const authenticateUser = (req, res, next) =>{
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({error:"Access denied no token provided"})
    }
    try {
        const decode = jwt.verify(token.split(" ")[1], process.env.JWT_PASS)
        req.user = decode
        next()
    } catch (error) {
        return res.status(401).json({error:"Invalid token"})
    }
}

const authorizeRole = (...roles) => {
    return (req, res, next) => {
        if(!req.user || !roles.includes(req.user.role)){
            return res.status(403).json({error:"Access denied"})
        }
        next()
    }
}

module.exports = { authenticateUser, authorizeRole }
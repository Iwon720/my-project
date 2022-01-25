const jwt = require('jsonwebtoken');

module.exports = function(role) {
    return function(req, res, next){
        try{
            const token = req.headers.autch.split(" ")[1];
            if(!token){
                return res.send({message: "not auth"})
            }
            const decoded = jwt.verify(token, 'SECRET_KEY_RANDOM');
            if(decoded.role !== role){
                return res.send({message: "not access"})
            }
            req.user = decoded;
            next();
        }catch(e){
            res.send({message: 'not auth'});
        }

    }
}
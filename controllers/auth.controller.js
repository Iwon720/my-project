const db = require('../models/index.js');
const User = db.users; 
const bcrypt = require("bcryptjs") //! чтобы пароль был спрятан
const jwt = require("jsonwebtoken")

const generateToken =( id, role)=>{
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, "SECRET_KEY_RANDOM", {expiresIn:"24h"}) //! генерация, будет действовать 24 часа
}

exports.login = async (req, res) => {
    const{login, pass} = req.body;
    const user = await User.findOne({raw:true, where: {name:login}}) 
    const validPassword = bcrypt.compareSync(pass, user.password) 
    if(validPassword){
        const token = generateToken(user.id, user.role)
        return res.send({token})
    }else{
        return res.send({message:"Wrong password"})
    }
}
exports.registration = async (req, res) => { 
    //! создание нового пользователя
    const userExist = await User.findOne({raw:true, where: {name:req.body.name}}) //! user это то что вводим при логе
    //! user для проверки на сущ такого пользователя
    if(userExist){
       return res.send({message: 'User already exist'})
    }
    const hashPassword = bcrypt.hashSync(req.body.password, 7) //! будет хешировать на 7 символов НАВЕРНОЕ
    const newUser = {
        name: req.body.name,
        phone : req.body.phone,
        password: hashPassword, //! указывыаем засекреченый пароль
        email: req.body.email,
        role: 'client',    
    }
    await User.create(newUser).then(()=>{
        res.send({message: 'new User created'})
    })
    
    
}

//?https://ru.wikipedia.org/wiki/JSON_Web_Token
//? https://metanit.com/web/nodejs/9.3.php
  //TODO сделать такую же штуку с devices. Добавить добавление удаление + изменение
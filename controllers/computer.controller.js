const db = require('../models/index.js');
const Computer = db.users;

exports.getAll = (req, res) => {
    Computer.findAll({ raw: true }).then((computers) => {
        res.send(computers)
    }).catch(err => console.log(err))
}

exports.addComputer = (req, res) => {
    const computer = req.body
    Computer.create(computer).then((computers)=>{
        res.send(computers)
    }).catch(err => console.log(err))
}

exports.deleteComputer = (req,res) => {
    const id = +req.params.id
    Computer.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.send('DELETED');
    });
}

exports.updateComputer = (req,res) => {
    const id = +req.params.id
    Computer.update({
        where: {
            id: id
        }
    }).then(() => {
        res.send('UPDATED');
    });
}


exports.getOneComputer = (req,res) => {
    const id = +req.params.id
    Computer.findOne({
        where: {
            id: id
        },
        raw: true
    }).then(() => {
        res.send('UPDATED');
    });
}
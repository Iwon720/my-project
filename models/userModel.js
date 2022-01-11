let users = [
    { name: 'Joseph', id:1, phone:25323232 },
    { name: 'Marish', id:2, phone:25323232 },
    { name: 'Johni', id:3, phone:25323232 },
  ]
module.exports = class User{
 
    constructor(user){
        this.name = user.name;
        this.id = user.id;
        this.phone = user.phone;
    }
    save(){
        users.push(this);
    }
    static delete(id){
        users = users.filter((user) => user.id !== id)
    }
    static getAll(){
        return users;
    }
}
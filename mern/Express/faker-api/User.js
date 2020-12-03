var faker = require('faker');

class User{
    constructor(){
        this._id=faker.random.uuid();
        this.firstname=faker.name.firstName();
        this.lastname=faker.name.lastName();
        this.phone=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}

module.exports = User
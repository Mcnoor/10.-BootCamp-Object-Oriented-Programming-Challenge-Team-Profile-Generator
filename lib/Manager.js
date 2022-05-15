const Employee = require("./Employee");

class Manger extends Employee {
    constructor(name,id,email,officeNumber){
      super(name,id,email);
      this.officeNumber = officeNumber;
    };
    getOfficeNumber = () => this.officeNumber;
    getRole = () => 'Manager';
};

module.exports = Manger;
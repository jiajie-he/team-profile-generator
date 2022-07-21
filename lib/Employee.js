// Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee';
    }
}

// const employee = new Employee('jiajie', '01', 'jiajie@mail.com');

// employee.getName();
// employee.getId();
// employee.getEmail();

module.exports = Employee
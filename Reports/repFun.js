// Report:
// 1.	Abstract VS interface 
// 2.	Inheritance in function constructor 

// Abstract Class in js 


// 2.	Inheritance in function constructor 

// Constructor functions define the prototype of the properties an object will contain. Using the constructor function, we can create a new object after passing the required parameters.

// Inheriting a previously defined constructor function means using the parameters of the previously defined function along with adding some new parameters to the newly defined constructor function. For this, we need to use the call() function which allows us to call a function defined somewhere else in the current context. 

//myFunction.call( this, property1, property2, ... , propertyN )
// Parameter values:
// myFunction: This is a constructor function from which we want to inherit the parameters in a new constructor function.
// this: The values of parameters that will use this keyword while calling myFunction.
// property1, property2, …, propertyN: The parameters that are to be inherited in the new constructor function.

//Return type: A constructor function or the function which has inherited its properties does not have any return type. It specifies the prototype of the properties an object will contain which are created from that constructor function.

// Example: Here, we create an ‘Employee’ constructor function. A new ‘Developer’ constructor function is created that will inherit the basic properties of ‘Employee’ as well as will contain some new properties. 
function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id, 
specialization) {

    // Calling Employee constructor function
    Employee.call(this, name, age, gender, id);

    // Adding a new parameter
    this.specialization = specialization;
}
console.log(Employee.prototype);
console.log(Developer.prototype);
// Object
// constructor: ƒ Employee(name, age, gender, id)
// [[Prototype]]: Object

// Object
// constructor: ƒ Developer(name, age, gender, id, specialization)
// [[Prototype]]: Object

// We can notice that the ‘Developer‘ constructor function inherits the properties of the ‘Employee‘ constructor function along with a new parameter ‘specialization‘. Here, we called the Employee function using the call() function to pass the required parameters to the Employee constructor function. 

// We can also create objects using these constructor functions after passing the values of the required properties of that object.
// Syntax:

// let Obj1 = new Object( parameters )
// Example: This example describes the object created with a new keyword to create an instance of an object that has a constructor function.


function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id, specialization) {

    // Calling Employee constructor function
    Employee.call(this, name, age, gender, id);

    // Adding a new parameter
    this.specialization = specialization;
}

// Creating objects
let Employee1 = new Employee("Suraj", 28, "Male", 564);
let Developer1 = new Developer("Karishma", 31, "Female", 345,
    "Frontend Developer");
console.log(Employee1);
console.log(Developer1);

// Employee {name: 'Suraj', age: 28, gender: 'Male', id: 564}
// age: 28
// gender: "Male"
// id: 564
// name: "Suraj"
// [[Prototype]]: Object

// Developer {name: 'Karishma', age: 31, gender: 'Female', id: 345, 
//     specialization: 'Frontend Developer'}
// age: 31
// gender: "Female"
// id: 345
// name: "Karishma"
// specialization: "Frontend Developer"
// [[Prototype]]: Object


// We can observe that the constructor function of Employee is inherited to create a new constructor function Developer which can be used to create objects with new properties along with the inherited properties of the parent constructor.
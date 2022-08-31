// class Person
class Person{
    constructor(fullName,money,sleepMood,healthRate){
        this.fullName=fullName;
        this.money=money;
        this.sleepMood=sleepMood;
        this.healthRate=healthRate;
    }
  
     sleep(hours) {
        if(hours ==7){
            this.sleepMood='happy';
            console.log(`sleep mode is ${this.sleepMood}`);
        }else if(hours < 7){
            this.sleepMood='tired';
            console.log(`sleep mode is ${this.sleepMood}`);
        }else if(hours > 7){
            this.sleepMood='lazy';
            console.log(`sleep mode is ${this.sleepMood}`);
        }else{
            console.log('invalid value');
        }

    }
    eat(meals){
        if(meals ==3){
            this.healthRate=100;
            console.log(`healthRate = ${this.healthRate}`);
          }else if(meals == 2){
            this.healthRate=75;
            console.log(`healthRate = ${this.healthRate}`);
          }else if(meals == 1){
            this.healthRate=50;
            console.log(`healthRate = ${this.healthRate}`);
          }
    }
    buy(items){
        if(items == 1 ){
            this.money+=10;
            console.log(`money equal to ${this.money}`);
        }
    }
}
// var id = (Math.random() * Date.now()).toFixed();
// console.log(id);
var counter=1;
class Employee extends Person{
   
    constructor(email,workMood,salary,isManager,fullName,money,sleepMood,healthRate){
        super(fullName,money,sleepMood,healthRate);
        // id =  (Math.random() * Date.now()).toFixed();
          this.numId=(Math.random() * Date.now()).toFixed();
        // console.log(this.numId);
        this.email=email;
        this.workMood=workMood;
        if(salary >= 1000){
             this.salary=salary;
         }else{
            console.log("salary must be greater than 1000");
         }
        
        this.isManager=isManager;
        
    }
    work(hours){
        if(hours ==8){
            this.workMood='happy';
            console.log(`Work mode is ${this.workMood}`);
        }else if(hours > 8){
            this.workMood='tired';
            console.log(`Work mode is ${this.workMood}`);
        }else if(hours < 8){
            this.workMood='lazy';
            console.log(`work mode is ${this.workMood}`);
        }else{
            console.log('invalid value');
        }

    }

}
var Employees=[];
class Office{
    constructor(name,Employees){
      this.name=name;
      this.Employees=Employees;

    }
    hire(Employee){
        const employee =Employee;
        Employees.push(employee);
  
     }
    getEmployee(email){
        Employees.filter((emp)=>{
           if(emp.email == email){
           if(emp.isManager){
                  console.log(`Employee Full Name is ${emp.fullName} ,Employee Email is  ${emp.email} , Employee Id is  ${emp.numId} \n`);
        }else{
                console.log(`Employee Full Name is ${emp.fullName} ,Employee Email is  ${emp.email} , Employee salary is ${emp.salary} ,Employee Id is  ${emp.numId}  \n`);
            }
        }
        });
           }
        

    
   
    fire(email){
        for(var i=0;i<Employees.length;i++){
           var emp=Employees[i];
            if(emp.email== email){
             Employees.splice(i,1);
            }
            
       
    }

    }
    // getData(){
    //     console.log(`${this.name} and ${this.Employees}`);
    // }
    getAllEmployees(){
        for(var i=0;i<Employees.length;i++){
            var emp = Employees[i];
            console.log(`${i} Employee Full Name is ${emp.fullName} ,Employee Email is  ${emp.email} , Employee salary is ${emp.salary} ,Employee Id is  ${emp.numId} , if manager ! --> ${emp.isManager} \n`);
           
        }
        return Employees;

    }
}
const person2=new Person('laila Ibrahim',100,'happy',40);
person2.sleep(2); // sleep mode is tired
person2.eat(3); // healthRate = 100
person2.buy(1); // money equal to 110

const Employee1 = new Employee("laila@gmail.com",'happy',1200,true,'laila Ibrahim',200,'happy',120);
Employee1.work(9);//Work mode is tired

const office1 =new Office('addicata',[]);
// office1.getData();
office1.hire(Employee1); 
office1.getAllEmployees();// 0 Employee Full Name is laila Ibrahim ,Employee Email is  laila@gmail.com , Employee salary is 1200 ,Employee Id is  254009838966 , if manager ! --> true 

office1.getEmployee("laila@gmail.com"); // Employee Full Name is laila Ibrahim ,Employee Email is  laila@gmail.com , Employee Id is  1401253700075  



const Employee2 =new Employee("ahmed@gmail.com","tired",3000,false,'Ahmed omar',300,'happy',100);
office1.hire(Employee2);
office1.getAllEmployees();
// 0 Employee Full Name is laila Ibrahim ,Employee Email is  laila@gmail.com , Employee salary is 1200 ,Employee Id is  405544727351 , if manager ! --> true 

// 1 Employee Full Name is Ahmed omar ,Employee Email is  ahmed@gmail.com , Employee salary is 3000 ,Employee Id is  125869030871 , if manager ! --> false 

const Employee3=new Employee("azza@yahoo.com","lazy",2000,true,'Azza Mohamed',200,'tired',150);
office1.hire(Employee3);
office1.getAllEmployees();

// 0 Employee Full Name is laila Ibrahim ,Employee Email is  laila@gmail.com , Employee salary is 1200 ,Employee Id is  1416350531362 , if manager ! --> true 

//  1 Employee Full Name is Ahmed omar ,Employee Email is  ahmed@gmail.com , Employee salary is 3000 ,Employee Id is  1610571029474 , if manager ! --> false 

//  2 Employee Full Name is Azza Mohamed ,Employee Email is  azza@yahoo.com , Employee salary is 2000 ,Employee Id is  335321996164 , if manager ! --> true

office1.fire("ahmed@gmail.com");
office1.getAllEmployees();
// 0 Employee Full Name is laila Ibrahim ,Employee Email is  laila@gmail.com , Employee salary is 1200 ,Employee Id is  1147863289361 , if manager ! --> true 

// fun.js:126 1 Employee Full Name is Azza Mohamed ,Employee Email is  azza@yahoo.com , Employee salary is 2000 ,Employee Id is  299204850679 , if manager ! --> true 
counter=1;
function startPro(){
    counter++;
    
        var op = prompt("do you want to add Employee write 'add'");
        if(op =='add'){
            var ifManager = prompt("if employee is manager write 'mngr' else 'nrml'");
            if(ifManager=='mngr'){
                var fullName =prompt('please enter full Name');
                var email=prompt('please enter email');
                var workMood=prompt('please enter workmood');
                var salary=prompt('please enter salary');
                var money=prompt('please enter money');
                var sleepMood=prompt('please enter sleepMood');
                var healthRate=prompt('please enter healthRate');
                const _counter=new Employee(email,workMood,salary,true,fullName,money,sleepMood,healthRate);
                office1.hire(_counter);
               
                office1.getEmployee(email);
                
              
               

            }else if(ifManager=='nrml'){
                var fullN =prompt('please enter full Name');
                 var mail=prompt('please enter email');
                var workmood=prompt('please enter workmood');
                var salaryy=prompt('please enter salary');
                var moneyy=prompt('please enter money');
                var sleepMoodd=prompt('please enter sleepMood');
                var healthRatee=prompt('please enter healthRate');
                const _counter=new Employee(mail,workmood,salaryy,false,fullN,moneyy,sleepMoodd,healthRatee);
                office1.hire(_counter);
               office1.getEmployee(mail);

            }
           
           
           
        }
      
   
    

}









// Using Constructor functions
function Personcon(fullName,money,sleepMood,healthRate){
    this.fullName =fullName;
    this.money=money;
    this.sleepMood=sleepMood;
    this.healthRate=healthRate;
    this.sleep=function(hours){
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

    };
   this.eat=function(meals){
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
   };
   this.buy=function(items){
    if(items == 1 ){
        this.money+=10;
        console.log(`money equal to ${this.money}`);
    }

   };

}
const person1=new Personcon('laila Ibrahim',100,'happy',40);
person1.sleep(5); // sleep mode is tired
person1.eat(2); // healthRate = 75
person1.buy(1); // money equal to 110

//----------------------------------------------------------------------------------------------------------------------
// using classes
class Personcl{
    constructor(fullName,money,sleepMood,healthRate){
        this.fullName =fullName;
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

const person2=new Personcl('laila Ibrahim',100,'happy',40);
person2.sleep(2); // sleep mode is tired
person2.eat(3); // healthRate = 100
person2.buy(1); // money equal to 110
//---------------------------------------------------------------------------------------------------------------------------
// Using Objects Linking to Other Objects (OLOO)
const Personoloo ={
init(fullName,money,sleepMood,healthRate){
    this.fullName =fullName;
    this.money=money;
    this.sleepMood=sleepMood;
    this.healthRate=healthRate;
},
sleep:function(hours){
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
},
eat:function(meals){
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
},
buy:function(items){
    if(items == 1 ){
        this.money+=10;
        console.log(`money equal to ${this.money}`);
    }
}

};
const person3=Object.create(Personoloo);
person3.init('laila',60,'tired',40);
person3.sleep(9);// sleep mode is lazy
person3.eat(2);// healthRate = 75
person3.buy(1);// money equal to 70
//--------------------------------------------------------------------------------------------------------------------------
// using Factory Functions
function Personfac(fullName,money,sleepMood,healthRate){
    return{
       fullName:fullName,
       money:money,
       sleepMood:sleepMood,
       healthRate:healthRate,
       sleep:function(hours){
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
       },
       eat:function(meals){
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
       },
       buy:function(items){
        if(items == 1 ){
            this.money+=10;
            console.log(`money equal to ${this.money}`);
        }
       }
    };
}
const person4=Personfac('laila',50,'happy',80);
person4.sleep(10); //sleep mode is lazy
person4.eat(1); // healthRate = 50
person4.buy(1);// money equal to 60
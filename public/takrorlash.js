/*Programming paradigma nima? 
Functional programming va Object Oriented Programming 
OOP Big 4 concepts:
Abstraction
Encapsulation
Inheritance 
Polymorphism*/

//const { name } = require("ejs");


//Object built via literal method
// property - qavs ichidagi qism properties db etiladi.
 /* const person = {
  name: "david",
  age: 30,
  nationality: "Australian",
//method=== function  // object ichida function ochsa bold va function so’zi tushib qosa ham bo’ladi.
 greet() {
    console.log("Hi, How are you?");
 }, 
 introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old!`)
 }
};
//key:  name, age, nationality 
// value: “David”, 30, “Australia”

const a = person.name;
console.log("a:", a);  // bu objectni chaqirish un yordam beradi!

person.greet(); // person object orqali chaqirib
person.introduce();  */

// Primitiv variablelar  no reference but value  >> Manzil  bo'lmaydi
/*
const a = "David";  // String
const b =  30;  // Number
const c = true; // Boolean
const d = null // Null

let x = a;
x = "Ali";  // referece tushunchasi majud bomagi un o'zgarmaydi.
console.log("a:", a);

// object variable   referece and value

const person = {
    name: "Aziz",
    age: 25
}

const person2 = person;
person2.name = "Fred";
console.log("persone2's name:", person2.name); /// bu yerda biz yangi object yaratmadik faqat objectni nomini o'zgartiridik. 
// objectlar referentega ham ega.
console.log("persone's name:", person.name);*/

/*
const person = {
    name: "Aziz",
    age: 25
}

// spread operator (...) New Reference

const person2 = {...person};  // yangi reference xosil qilib oldingi obyektni faqatgina qiymatlaridan foydalanib yangi obyekt
// hosil qilish kerak bo'lsa Spread operatordan foydalanish kerak.
person2.name = "David";
console.log("person's name:", person.name);
console.log("person2's name:", person2.name);
*/

// Object build via constructor

/*
const obj = new Object(); /// object constructor orqali shu objectni yasayabmiz
obj.name = "David"
obj.age = 30;
obj.hobby = "football";

console.log(`My name is ${obj.name}, i am ${obj.age} and i love ${obj.hobby}`);

const keys = Object.keys(obj);
console.log(keys);

console.log("++++++++++++");

const values = Object.values(obj);
console.log(values);
 */




/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Clasllar>>>>>>>>>>>>>>>>>>>>>*/

// bir biriga yaqin objectlarni yaratishda bizga classlar kerak bo'ladi. classlar bu shablon deb o'ylasak bo'ladi.

// claslar >> STATE, Constructor, Method 


class Person {
    static serialNumber = 65;


    // state 
    name = ""; // bularni yozmasa ham bo'ladi chunki o'zi bor deb o'ylaydi. 
    age = 0;

    // constructor
    constructor(personName, personAge) { /// objectni  statelarini o'zgartishi uchun constructor ishlatiladi.  
        // personName, personAge >>> name , age, deb olsak ham boladi agar stateda malumot bo'lmasa ham constructor orqali malumot kirg'izsak bo'ladi
        this.name = personName;
        this.age = personAge;
    }

    // Method

    introduce() {
        console.log(`My Name is ${this.name} and I am ${this.age}`);
    }

    greet() {
        console.log('Hi, How do you do!');
    }
    static help() {
        console.log("Hi, I am Person clase, how can I help you?");
    }
}

const person1 = new Person('Martin', 33);
const person2 = new Person('David', 30);

person1.greet();
person1.introduce();
Person.help();
const numer1 = Person.serialNumber
console.log("number1:" , numer1);


// Static method - to'gridan to'gri class bn yashidigan method hisoblanadi.







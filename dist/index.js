"use strict";
// @saeed hussain
// @nov 12 2023
//*************************************//
//*           Basic types           ***//
//*************************************//
// number
let id = 5;
// string
let company = "mt"; // this is typescript\
// Boolean
let isActive = true;
// any ( any type )
let job = true;
job = false;
//*************************************//
//*       Array (Number-type)       ***//
//*************************************//
// to define an array with only numbers in trpe script
let anArr = [1, 2, 3, 4, 5, 6];
// anArr.push("saeed") //we can not push an string inside it
anArr.push(10);
//*************************************//
//*         Array (any-type)        ***//
//*************************************//
// array with any type
let anArr1 = [1, true, false, "saeed", 1.3];
// anArr.push("saeed") //we can not push an string inside it
anArr1.push(10);
//*************************************//
//*              tuple              ***//
//*************************************//
let tuple1 = [
    1,
    true,
    false,
    "saeed",
    1,
];
//*************************************//
//*    creating tuple array         ***//
//*************************************//
let employee;
employee = [
    [1, "saeed"],
    [2, "saeed2"],
    [3, "saeed3"],
    [4, "saeed4"],
];
//*************************************//
//*          union type             ***//
//*************************************//
// union type // we can assign more then one type to this variable
let pid1;
let pid;
pid = "22";
//*************************************//
//*enum with default (0,1,2,3) values**//
//*************************************//
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
//*************************************//
//*     enum with (1,2,3,4) values    *//
//*************************************//
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
//*************************************//
//*     enum with string values    *//
//*************************************//
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "red";
    Direction3["Down"] = "green";
    Direction3["Left"] = "blue";
    Direction3["Right"] = "pink";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Down);
//*************************************//
//*           objects                 *//
//*************************************//
// both are same
const user = {
    id: 1,
    name: "jhon",
};
const user2 = {
    id: 1,
    name: "jhon",
};
//*************************************//
//*       type Assertions             *//
//*************************************//
let cid = 1;
// first method 
let customerId = cid;
// second method 
let customerId1 = cid;
//*************************************//
//*           functions               *//
//*************************************//
//first num / second num /return value datatype
function addTwoNumbers(x, y) {
    return x + y;
}
//*************************************//
//*    void type in functions         *//
//*************************************//
// string and number /return value void datatype
function addTwoNumbers1(message) {
    console.log(message);
}
// creating object using UserInterface and assigning values
const user1 = {
    id: 1,
    name: "asas"
};
const user12 = {
    id: 1,
    name: "asas"
};
const user4 = {
    id: 1,
    name: "asas"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//**********************************//
//*           class                *//
//**********************************//
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// inheritance
const brad = new Person(1, "saeed");
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad1 = new Person(1, "saeed");
//  console.log(brad1);
//*************************************//
//***          subclass             ***//
//*************************************//
// inheritance
// subclass
// A class inheriting propertioes of class Person1 and it have some its own properties as well
class Employee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// creating instance
const emp = new Employee(1, "jamil", "gilgit");
console.log("emp name:", emp.name);
console.log(emp.register());
//*************************************//
//***          Generics             ***//
//*************************************//
// generics are basically use to build reuseable components 
function getArray1(items) {
    return new Array().concat(items);
}
let numArray1 = getArray1([1, 2, 3, 4]);
let strArray1 = getArray1(["saeed", "imran", "inayat"]);
// here i am trying to push a string to a number array and its accepting it is justbecause of any type
// to fullfill this error we are using generics
numArray1.push("hello");
strArray1.push(1);
// use of generics
// here we are potting capital T with opening and closing angle brackets while defining function and when we are using that sunction 
// we are using type name while anaslizing that function
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["saeed", "imran", "inayat"]);
// here when i try to push a number in a string-type array i got an error 
//  so that whey we are using generics
// strArray.push(1)

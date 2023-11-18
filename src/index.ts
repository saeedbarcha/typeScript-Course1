// @saeed hussain
// @nov 12 2023



//*************************************//
//*           Basic types           ***//
//*************************************//
// number
let id: number = 5;
// string
let company: string = "mt"; // this is typescript\
// Boolean
let isActive: boolean = true;
// any ( any type )
let job: any = true;
job = false;




//*************************************//
//*       Array (Number-type)       ***//
//*************************************//
// to define an array with only numbers in trpe script
let anArr: number[] = [1, 2, 3, 4, 5, 6];
// anArr.push("saeed") //we can not push an string inside it
anArr.push(10);


//*************************************//
//*         Array (any-type)        ***//
//*************************************//
// array with any type
let anArr1: any[] = [1, true, false, "saeed", 1.3];
// anArr.push("saeed") //we can not push an string inside it
anArr1.push(10);




//*************************************//
//*              tuple              ***//
//*************************************//
let tuple1: [number, boolean, boolean, string, number] = [
  1,
  true,
  false,
  "saeed",
  1,
];


//*************************************//
//*    creating tuple array         ***//
//*************************************//
let employee: [number, string][];
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
let pid1: string | number | boolean;
let pid: string | number;

pid = "22";




//*************************************//
//*enum with default (0,1,2,3) values**//
//*************************************//
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Down);



//*************************************//
//*     enum with (1,2,3,4) values    *//
//*************************************//
enum Direction2 {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

console.log(Direction2.Down);



//*************************************//
//*     enum with string values    *//
//*************************************//
enum Direction3 {
  Up = "red",
  Down = "green",
  Left = "blue",
  Right = "pink",
}

console.log(Direction3.Down);




//*************************************//
//*           objects                 *//
//*************************************//
// both are same
const user: { id: number; name: string } = {
  id: 1,
  name: "jhon",
};

type User = { id: number; name: string };
const user2: User = {
  id: 1,
  name: "jhon",
};




//*************************************//
//*       type Assertions             *//
//*************************************//
let cid: any = 1
// first method 
let customerId =<number> cid
// second method 
let customerId1 = cid as number




//*************************************//
//*           functions               *//
//*************************************//
//first num / second num /return value datatype
function addTwoNumbers (x:number, y:number):number{
    return x + y;
}



//*************************************//
//*    void type in functions         *//
//*************************************//
// string and number /return value void datatype
function addTwoNumbers1 (message:string | number): void{
   console.log(message)
    
}




//*************************************//
//*  interface and type keyword       *//
//*************************************//
// interface and type both are al most same but only difference is 
// we can only use type with premitives and unions

// type only for premitives and unions
type saeed = string;
type saeed1 = string | number;

// interface
interface UserInterface {
    id:number,
    name:string
}

// creating object using UserInterface and assigning values
const user1: UserInterface ={
id:1,
name:"asas"
}



//*************************************//
//*** Optional properties in object ***//
//*************************************//
// if we need some properties to be optional we need to put question mark ? in the end of that key name 
// suppose age is optional here
interface UserInterface2 {
    id:number,
    name:string,
    age?:number
}

const user12: UserInterface2 ={
id:1,
name:"asas"
}



//*************************************//
//***    Ready Only properties      ***//
//*************************************//
// in this case it will gives us error when we try to modify an property is just because of the readonly property

interface UserInterface4 {
 readonly id:number,
  name:string
}

const user4: UserInterface4 ={
id:1,
name:"asas"
}
// we will get error over this 
// user4.id=5;




//*************************************//
//***using imterfaces with functions***//
//*************************************//
interface MathFunc{
  (x:number, y:number):number
}

const add: MathFunc = (x: number, y:number): number => x + y
const sub: MathFunc = (x: number, y:number): number => x - y


//**********************************//
//*           class                *//
//**********************************//
class Person {
 public id: number
// private id: number    
//  protected id: number
  name:string
  constructor(id:number, name:string){
    this.id = id
    this.name = name 
  }

  register(){
    return `${this.name} is now registered`
  }

}

// inheritance
const brad = new Person (1, "saeed");
// console.log(brad);



//**********************************//
//**     interfaces in class      **//
//**********************************//
// to use interface in classes we need to use implements keyword between class name nad interface keyword
interface PersonInterface {
  id:number
  name:string

  register(): string
}

class Person1 implements PersonInterface {
  public id: number
 // private id: number    
 //  protected id: number
   name:string
   constructor(id:number, name:string){
     this.id = id
     this.name = name
   }
 
   register(){
     return `${this.name} is now registered`
   }
 
 }
 
 const brad1 = new Person (1, "saeed");
//  console.log(brad1);




//*************************************//
//***          subclass             ***//
//*************************************//
// inheritance
// subclass
// A class inheriting propertioes of class Person1 and it have some its own properties as well
class Employee extends Person1 {
  position:string

  constructor (id:number, name:string, position:string){
    super(id, name)
    this.position =position
  }
}
// creating instance
const emp = new Employee(1,"jamil", "gilgit");

console.log("emp name:",emp.name)
console.log(emp.register())




//*************************************//
//***          Generics             ***//
//*************************************//
// generics are basically use to build reuseable components 
function getArray1(items: any[]): any[]{
  return new Array().concat(items)
}

let numArray1 =getArray1([1,2,3,4])
let strArray1 =getArray1(["saeed","imran","inayat"])

// here i am trying to push a string to a number array and its accepting it is justbecause of any type
// to fullfill this error we are using generics
numArray1.push("hello")
strArray1.push(1)






// use of generics
// here we are potting capital T with opening and closing angle brackets while defining function and when we are using that sunction 
// we are using type name while anaslizing that function


function getArray <T> (items: T[]): T[]{
  return new Array().concat(items)
}

let numArray =getArray<number>([1,2,3,4])
let strArray =getArray<string>(["saeed","imran","inayat"])

// here when i try to push a number in a string-type array i got an error 
//  so that whey we are using generics
// strArray.push(1)

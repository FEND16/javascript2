/*=====================================
=            Destructuring            =
=====================================*/

/**
 * PRESENTING THE WORLD MOST ORGANIZED CODE!
 */

var objectToDestruct = { 
  x: 50, 
  y: 55, 
  z: 10 
};


//We extract the values from the object and save to new variables
var { x,y,z } = objectToDestruct;

console.log(x,y,z);

var country = {};

//These basically do the same thing
var {population} = country;

var population = country.population;



/**
 * We can also destruct arrays
 */

var arrayToDestruct = [6,10,4,2,4,5,1000];

var [a,,,yay,,,c] = arrayToDestruct;

//console.log(a,c, yay);

var a = arrayToDestruct[0];

/*=====================================
=            Spread                   =
=====================================*/


var a = [1,5,6,8,2,8];

//Concat inside array
var u = ["hej", ...a , "wow, skriva"];

//Arrays with a reference to the previous array
var b = a;

//If we pop a, b will also be popped
a.pop();
//console.log(a,b);

//Array with no reference to the previous array.
//C will not be popped if a or b is popped
var c = [...a];

//Spread can be used to concat arrays
var concatArray = [...a, ...u];



/*----------  rest  ----------*/

//Take no arguments but we can use the 'arguments'
//reserved keyword to access the arguments
function logArgs(){
  for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

//logArgs("Hej argument!");


//Does the same thing in a cleaner way 
//with rest operator
function logArgsRest(...args){
  for (let arg of args){
    console.log(arg);
  }
}

//logArgsRest("Hej argument från REST");



const max = (nums) => Math.max(...nums);  

var arr =[6,6,8,9,32,0];

// console.log(max(arr));


// console.log(Math.max(...[6,6,8,9,32,0]));
// console.log(Math.max(6,6,8,9,32,0));


//Rest always returns an empty array if no arguments
//are supplied




const getFirst = (first = 5, second = 0, ...banan) => {
  var value = first || 5;
  console.log(first, second, banan);
} 


//getFirst(100);




/*----------  object shorthand  ----------*/


var name = "Gnurfur";
var race = "Troll";


var obj = {
  name,
  race
};

//console.log(obj);




/*----------  Object.assign  ----------*/

/**
 * When you want to merge objects together to create new
 * objects. Or merge already existing objects
 */

///base object
var baseObject = {
  x: 100, y: 200
}

var objectToMerge = {
  y: 500, z: 600
}

//The last object to be assign will overwrite previous values
//if the have the same property names. Be careful
var mergedObject = Object.assign({}, baseObject, objectToMerge);

console.log(mergedObject, baseObject);




/*----------  Default Parameters  ----------*/


function add(x=5, y=5){
  return x + y;
}

/*===============================
=            Classes            =
===============================*/



class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayName(){
    console.log(this.name);
  }
}

// var Gnurfur = new Person('Gnurfur', 150);
// var Ruff = new Person('Ruff', 10000);
// Gnurfur.sayName();
// Ruff.sayName();
// console.log(Gnurfur, Ruff);



/*----------  EXTENDS  ----------*/



class Teacher extends Person{
  constructor(name, age, teacher){
    
    //Person.call(this, name, age);
    super(name, age);
    this.teacher = true;
  }
  sayName(){
    super.sayName();
    console.log('NEJ!');
  }
}

// var teachy = new Teacher('Jesper', 25);
// teachy.sayName();
//console.log(teachy);


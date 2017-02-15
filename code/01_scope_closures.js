/*===========================================
=            map, reduce, filter            =
===========================================*/

/**
 * All the country data from: http://countrymeters.info
 * @type {Array}
 */
 var countries = [
 { 
   name: "United Kingdom",
   continent: "Europe",
   population: 65270121,
   pFemale: 0.508 
 },
 { 
   name: "Republic of Ireland",
   continent: "Europe",
   population: 4708209,
   pFemale: 0.499 
 },
 { 
   name: "Australia",
   continent: "Oceania",
   population: 24482205,
   pFemale: 0.502 
 },
 { 
   name: "Taiwan",
   continent: "Asia",
   population: 23522296,
   pFemale: 0.501 
 },
 {
   name: "Uruguay",
   continent: "South America",
   population: 3446772,
   pFemale: 0.517
 },
 {
   name: "Morocco",
   continent: "Africa",
   population: 35010005,
   pFemale: 0.510
 },
 {
   name: "Nigeria",
   continent: "Africa",
   population: 188688090,
   pFemale: 0.494
 },
 {
   name: "Zimbabwe",
   continent: "Africa",
   population: 16051510,
   pFemale: 0.507
 },
 {
   name: "China",
   continent: "Asia",
   population: 1381321335,
   pFemale: 0.488
 },
 {
   name: "Mexico",
   continent: "North America",
   population: 129386794,
   pFemale: 0.507
 },
 {
   name: "Canada",
   continent: "North America",
   population: 36446796,
   pFemale: 0.504
 },
 {
   name:"Czech Republic",
   continent:" Europe ",
   population:10556351,
   pFemale: 0.509
 },
 {
   name: "Iceland",
   continent: "Europe",
   population: 332631,
   pFemale: 0.496
 }
 ];


/**
 * 1. Returns an array of only the country names
 * @param  {Array} countryArray Array of country objects
 * @return {Array}              Array of country names
 */
 function getAllCountryNames(countryArray){

  return countryArray.map(function(semly){
    return semly.name;
  })
 }

// console.log(getAllCountryNames(countries));




/*=========================================
=            Scope and context            =
=========================================*/



/*----------  LETS LET  ----------*/


var data = [1,2,3];

function printData(){
  for (var datum of data){
    console.log(datum);
  }
  //This will not give an error because var is not block scope
  console.log(datum);
}

var data = [1,2,3];

function printData(){
  //let makes the variable block scope
  for (let datum of data){
    console.log(datum);
  }
  //This will give an error because it is no longer available
  console.log(datum);
}





/*----------  LETS CONST ----------*/



const CONSTANT = 5;

//Object constant can be assigned properties
const CONSTANTINOPEL = {}
const CONSTANTINE = [];


//Value can not be overwritten
CONSTANT = 3;

//WE can add a property to a constant object
CONSTANTINOPEL.semla = 3;

//You can push a new value to a constant array
CONSTANTINE.push(3);

//You can reassign a new value to the property of a object constant
CONSTANTINOPEL.semla = 5;

//console.log(CONSTANT);
//console.log(CONSTANTINOPEL);
//console.log(CONSTANTINE);

/**
 * The value of a constant cannot change through re-assignment, 
 * and a constant cannot be re-declared.
 * Because of this, although it is possible to declare a constant without initializing it,
 * it would be useless to do so.
 */


/*----------  Arrow Function =>  ----------*/


var ok = function(name){
  return 'Hello' + name;
}

//If you have multiple parameters you must supply parantheses
const ok2 = (name,age) => {
  return 'Hello' + name;
}

//You can omit the return and {}
const ok3 = () => 'Hello'




const getCountriesOfContinent = (countries, continent) => {
  return countries.filter((country) => {
    return country.continent == continent;
  })
};

 /*----------  Context  ----------*/

/**
 * The value of this is bound to the context.
 * For the most time, this is the Window, the global object.
 */

function foo(){

  //this refers to window context
  console.log(this);
  bar();

  function bar(){

    //this still refers to window context
    console.log(this);
    baz();

    function baz(){
      //this still refers to window context
      console.log(this);
    }
  }
}


var obj = {
  //The context is the obj object
  foo: function(){
    console.log('Inside first function:')
    //this refers to obj object
    console.log(this);
    var bar = () => {
      //this oddly refers to the window object :D Happens when we declare
      //a function inside a new function. We can solve this by using arrow function
      console.log('Inside second function:');
      console.log(this);

      
      var baz = function() {
        //context is still this. 
        console.log('Inside third function:');
        console.log(this);
      }
      baz();
    }
    bar();
  }
}


/*----------  Call And Apply  ----------*/


var person = {
  name: 'Sonny',
  age: 55
}

function sayMyName(param){
  console.log(this.name);
}

// sayMyName();


//WE can call a free standing function that is not on an object, but
//supply the context of the object by supplying the call function with an object
// sayMyName.call(person, 'param');
// sayMyName.apply(person, ['param']);



/*----------  Closures Function  ----------*/



function outerFunction(){
  var gooby = 'Scooby';

  console.log(gooby);

  return function(){
    console.log(gooby, this);
  }
}

//We have to save the return, because it is a new function
var innerFunction = outerFunction();

//Then we can call the new function
innerFunction();

/*----------  Functions inside objects: methods  ----------*/


/**
 * Our example database with semi-cool functions
 * @type {Object}
 */
 var CountryDatabase = {
  countries : [
  { 
    name: "United Kingdom",
    continent: "Europe",
    population: 65270121,
    pFemale: 0.508 
  },
  { 
    name: "Republic of Ireland",
    continent: "Europe",
    population: 4708209,
    pFemale: 0.499 
  },
  { 
    name: "Australia",
    continent: "Oceania",
    population: 24482205,
    pFemale: 0.502 
  },
  { 
    name: "Taiwan",
    continent: "Asia",
    population: 23522296,
    pFemale: 0.501 
  },
  ],
  getTotalPopulation: function() {
    return this.countries.reduce((total, country) => {
      return total + country.population;
    },0);
  },-
  //parametrar: array of countries and the selected continent
  getCountriesBetweenForContinent: function(continent, countries){
    
    //when returning the new function, the continent and countries are saved as 
    //free variables to the inner function
    //the inner function only takes the parameters max and min.
    return function(min, max){
      return countries.filter((country) => {
        return country.population > min && country.population < max && country.continent == continent;
      });
    }
  }
}

//Create new functions with factory functions parameters
var getCountriesInEuropeBetween = CountryDatabase.getCountriesBetweenForContinent('Europe', CountryDatabase.countries);
var getCountriesInAfricaBetween = CountryDatabase.getCountriesBetweenForContinent('Asia', CountryDatabase.countries);

//Supply the max min function to the inner function when we call it
console.log(getCountriesInEuropeBetween(50000, 150000000));
console.log(getCountriesInAfricaBetween(50000, 150000000));



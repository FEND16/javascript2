/*============================================
=            Constructor Function            =
============================================*/

/**
 * Remember that these are only two ways of doing this and 
 * none of them are really considered "standard". It all depends
 * on what your project is, how big it is, what it will do etc.
 * These are just base principles which almost every other pattern use.
 * The main thing here is the prototype chain and how it works not specific
 * implementations
 */

/**
 * Constructor function that creates a new Country
 * @param {String} name       Name of country
 * @param {String} continent  Which continent
 * @param {Number} population Population of country
 */
function CountryConstructor(name, continent, population, pFemale){
  this.name = name;               //Every property is stored in this
  this.continent = continent;     //this is the object that is created
  this.population = population;   //when you call this function with new
  this.pFemale = pFemale;
}

/**
 * Prototype function that prints the population of the object
 * The function is bound to the Constructor function that
 * creates the objects, therefore every new object that is created
 * with CountryFunction will have these prototype-functions
 * @return {void} console.log
 */
CountryConstructor.prototype.printPopulation = function(){

  //Prints the name and the population
  console.log(`${this.name} population is ${this.population}`);
}

/**
 * Prototype function that prints the population of the object
 * @return {void} console.log
 */
CountryConstructor.prototype.printContinent = function(){

  //Prints the name and which continent
  console.log(`${this.name} is situated in ${this.continent}`);
}

/**
 * Function that loops through every property in an object and print
 * its value. The this.hasOwnProperty() is used to stop the for..in loop
 * from looping through inherited properties. Try removing it and see what
 * happens. It does not always have to be used but it's best practice
 * if you want to ensure not to loop through inherited properties
 * @return {void} console.log
 */
CountryConstructor.prototype.toString = function(){
  for (let prop in this){
      if(this.hasOwnProperty(prop)){
      console.log(this[prop]);
      }
    }
}

/**
 * Object created with the Constructor. Will have all the functions that
 * the CountryConstructor has because we did 
 * @type {Country}
 */
var USA = new CountryConstructor('USA', 'North America', 5004040404);

/**
 * Constructor function that inherits from Country by calling
 * Country in the contructor
 * @param {String} name       Name of city
 * @param {String} country    Name of country
 * @param {String} continent  Name of continent
 * @param {Number} population Total population
 */
function CityConstructor(name, country, continent, population){

  //We borrow the CountryConstructor and call it with new context.
  //this refers to the created CityConstructor Object. But we have 
  //a new property that differs from the CountryConstructor. So we 
  //have to add that too. We don't have data on the pFemale variable so
  //we can skip that.
  CountryConstructor.call(this, name, continent, population);
  this.country = country;
}

//For the City contructor to inherit the Country constructors
//functions we must assign the property manually
CityConstructor.prototype = new CountryConstructor();


//We can not create new Cities and Countries with these two Constructor-functions
let USA = new CountryConstructor('USA', 'North America', 50003030, 0.45);
let NewYork = new CityConstructor('New York', 'USA', 'North America', 5000000);

USA.printContinent();


/*=====================================
=            Object.create            =
=====================================*/

/**
 * Prototype object used for creating Country objects. Basically just
 * an object with a set of functions inside. Remeber that everything is
 * an object so it's not that weird that this is just a simple object. It doesn't
 * do exactly everything the constructor do but the base principle is the same.
 * You let an object inherit functions from another object. 
 * @type {Object}
 */
var Country = {
  printPopulation: function(){
    console.log(`${this.name} is situated in ${this.continent}`);
  },
  printContinent: function(){
    console.log(`${this.name} is situated in ${this.continent}`);
  }
}

/**
 * City object created by creating an object based on the
 * Country object. Inherits the functions that the Country Object has.
 * @type {Object}
 */
var City = Object.create(Country)

/**
 * Create an single City Object based on the City object. The City
 * object basicly just have the two inherited functions.
 * @type {Object}
 */
var Stockholm = Object.create(City, 
  { name: { value: 'Stockholm' },   // { name: { value: 'Stockholm' } }
    country: { value: 'Sweden'},    // Awkward syntax but must be written
    continent: { value: 'Europe'},  // This way because it takes more params
    population: { value: 5000000}   // than just value. 
  });


Stockholm.printPopulation();


/*======================================
=            Module Pattern            =
======================================*/

/**
 * Our Module which is a IIFE saved to a variable. The object after
 * return gets returned immedietly.
 * @return {Object}    
 */
var CountryDatabase = (function(){
  /**
   * Array of countries to loop through
   * @type {Array}
   */
  var countries = [
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
    continent:"Europe",
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
  //The whole function returns an object
  //with all the functions belonging to
  //our modules and all the data that it uses.
  return {
    getTotalPopulation: function(){
      //We refer to countries which is in the scope above
      //and therefore available to this function. It exists in
      //a closure
      return countries.reduce((totalPop, country) => {
        return totalPop + country.population;
      }, 0);
    },
    getCountryByContinent: function(continent){
      return countries.filter((country) => {
        return country.continent === continent;
      });
    },
    //Sometimes it is better to create a new array
    //with the new value and replace the existing
    //array with the new array.
    addNewCountry: function(newCountry){
      var newCountriesArray = countries;
      newCountriesArray.push(newCountry);
      countries = newCountriesArray;
    },
    //We can have a "get"-method to just return the array,
    //if we have a function that returns the array instead
    //of directly accessing it via "CountryDatabase.countries"
    //we get much more control, and we can choose to remove the 
    //function and therefore remove the access to the array
    returnCountriesArray: function(){
      return countries;
    }
  }
  //End of return
})();

//We can only get the data from the exposed functions
//console.log(CountryDatabase.getTotalPopulation());

//This will result in an error
//console.log(CountryDatabase.countries);


/*================================================
=            Revealing Module Pattern            =
================================================*/



/**
 * Same as above but with a bit different implementation.
 * Here we can choose to hide certain functions and implementation.
 * @return {Object} 
 */
var RevealCountryDatabase = (function(){
  var countries = [
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
    continent:"Europe",
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

  //We can put the functions in the IIFE. All functions will be
  //private if we do this.
  function getTotalPopulation() {
    return countries.reduce((totalPop, country) => {
      return totalPop + country.population;
    }, 0);
  }
  function getCountryByContinent(continent){
    return countries.filter((country) => {
      return country.continent === continent;
    });
  }
  function addNewCountry(newCountry){
    var newCountriesArray = countries;
    newCountriesArray.push(newCountry);
    countries = newCountriesArray;
  }
  function returnCountriesArray() {
    return countries;
  }

  //In the return statement we refer to the function in the outer
  //scope and return in. The right hand side, the value, is the inner 
  //function and the left hand side is the public function. If we would
  //call this function we would use RevealCountryDatabase.getArray();
  return {
    returnCountriesArray: returnCountriesArray
  }
})();


//console.log(RevealCountryDatabase.getArray());


/*----------  ES6 Implementation  ----------*/


/**
 * Same as above but with ES6. Arrow Functions, let and const.
 * @return {Object}
 */
const RevealCountryDatabaseES6 = (function(){
  const countries = [
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
    continent:"Europe",
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
  const getTotalPopulation = () => {
    return countries.reduce((totalPop, country) => {
      return totalPop + country.population;
    }, 0);
  }
  const getCountryByContinent = (continent) => {
    return countries.filter((country) => {
      return country.continent === continent;
    });
  }
  const addNewCountry = (newCountry) => {
    let newCountriesArray = countries;
    newCountriesArray.push(newCountry);
    countries = newCountriesArray;
  }
  const returnCountriesArray = () => {
    return countries;
  }
  return {
    getArray: returnCountriesArray
  }
})();


//console.log(RevealCountryDatabaseES6.getArray());
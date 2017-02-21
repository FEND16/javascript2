/**
 * Country class that creates a Country object
 * class syntax is syntactic sugar and creates
 * a new object like the constructor function
 * @class  Country
 */
 class Country{
  /**
   * Constructor that creates the new object
   * @param  {String} name       Name of Country
   * @param  {String} continent  Continent of Country
   * @param  {Number} population Population of country
   * @param  {Number} pFemale    Percentage female population
   * @return {Object}            Returns a new object
   */
  constructor(name, continent, population, pFemale){
    this.name = name;
    this.continent = continent;
    this.population = population;
    this.pFemale = pFemale;
  }
  /**
   * Returns the name of the country in a string
   * @return {String}
   */
  getName(){
    return `Country name is ${this.name}`;
  }
  /**
   * Gets the total population
   * @return {Number} Total Population
   */
  getPopulation(){
    return this.population;
  }
  /**
   * Removes 4/5 of the population cuz of virus you know
   * @return {void}
   */
  virusOutbreak(){
    this.population = (this.population/5).toFixed(0);
  }
}


//We create a new object in the exact same way as when we used the 
//constructor function. 
const Iceland = new Country('Iceland', 'Europe',  331778,  0.45);



/*=========================================
=            Class Inheritance            =
=========================================*/

/**
 * City class that creates a new City based on the the class of Country
 * the City class extends the Country class.
 */
class City extends Country{
  //We call the constructor to create a new object
  constructor(name, country, continent, population, pFemale){
    //super() is used to call the constructor of the parent. The
    //class that this class inherits from: Country.
    //This is basicly like doing:
    //Country.call(this, name, continen, population, pFemale);
    super(name, continent, population, pFemale);
    //We still have to add the new property because the superclass
    //doesn't have the country property
    this.country = country;
  }
}

const Stockholm = new City('Stockholm', 'Sweden', 'Europe', 1000000, 0.65);
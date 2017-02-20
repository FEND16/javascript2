function Cat(name, type){
  this.name = name;
  this.type = type;
}

Cat.prototype.mjau = function(){
  console.log("Mjau I'm " + this.name);
}

Cat.prototype.hasStuff = true;

var Ronny = new Cat('Ronny', 'Cat');
//console.log(Ronny);




var Cat = { 
  //Prototypobjektet som vi skapar det andra objektet med. Objektet
  //har bara en funktion som kommer vara bunden till varje nytt objekt
  //som skapas av typen Cat.
  prototype: {
    mjau: function(){
      console.log("Mjau I'm " + this.name);
    }
  },

  //Istället för constructor, en "konstruktorfunktion"
  create: function(name, type){

    //Skapa ett nytt objekt baserat på prototypobjektet.
    var cat = Object.create(this.prototype);
    cat.name = name;  //Lagrar parametrar i det nya objektet
    cat.type = type; 
    return cat;       //Returnerar objektet
  }
};




//När vi nu skapar objektet skapar vi nu objektet med funktionen
//som ligger i objektet Cat
var Missy = Cat.create("Missy", "Burma");
var Gorbaj = Cat.create("Gorbaj", "Norsk");

//console.log(Missy, Gorbaj);
//
//
//
//
//
//
//
//
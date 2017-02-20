# JavaScript Design Patterns

<img align="right" height="350" width="auto" src="https://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg" alt="JavaScript Logo: https://i.stack.imgur.com/Mmww2.png" />

Designmönster är som mycket annat inom JavaScript: inga konstigheter men förvirrande när man ska blanda in massa nya begrepp överallt. Nu när vi ska implementera olika designmönster är det inget nytt vi gör, du har använt flera olika mönster redan men vi ska fokusera på två mönster för att skapa _namespaces_.

>Med ett designmönster sätter man ett ord och en etikett på vanliga lösningar på vanligt förekommande problem inom programmering.

Många designmönster är varianter av andra designmönster. Omarbetade lösningar som har skapat nya designmönster så som att _Singleton_-mönstret är en implementation av __Revealing Module Pattern__.

Föregående lektion visade jag två olika mönster som löser problemet hur man ska låta objekt ärva av andra objekt. Dessa två mönster använder sig utav prototypkedjan och `Object.create` för att skapa nya objekt: 

##### Constructor Pattern

```javascript

//Constructor pattern, a function that produces new
//objects. But still just a regular function
function Person(name, age){
    this.name = name;
    this.age = age;
}

//We can bind functions to every object that will be created with
//the constructor pattern (function)
Person.prototype.speak = function(){
    console.log(`Hello I'm ${this.name}!`);
}

//We have to use the new keyword to create a new object
var Roffe = new Person('Roffe', 25);

```

##### Factory Pattern

```javascript
var Person = {
    construct: function(name, age){
        var newPerson = Object.create(this.prototype);
        newPerson.name = name;
        newPerson.age = age;
    },
    prototype: {
        speak: function(){
            console.log(`Hello I'm ${this.name}!`); 
        }
    }
}

var Roffe = Person.construct('Roffe', 25); // { name: 'Roffe', age: 25}
Roffe.speak(); //Hello I'm Roffe!

```

Ovanstående kod skulle även kunna skrivas med separerade objekt på följande sätt:

```javascript

//The prototype is just another object that we use
//to let objects inherit functions and variables.
var PersonPrototype = {
    speak: function(){
        console.log(`Hello I'm ${this.name}!`); 
    }
}

var Person = {
    construct: function(name, age){
        //We just have to supply an object for the new object
        //to be based upon, it doesn't have to be in same object
        //as the construct function
        var newPerson = Object.create(Personprototype);
        newPerson.name = name;
        newPerson.age = age;
    }
}

var Roffe = Person.construct('Roffe', 25); // { name: 'Roffe', age: 25}
Roffe.speak(); //Hello I'm Roffe!

```

Du har kommit såhär långt så här är en en __xkcd comic__ om kodkvalité:

![https://xkcd.com/1513/](https://imgs.xkcd.com/comics/code_quality_2x.png)


## Övning

I denna övning ska du implementera två nya designmönster inom JavaScript som bygger på `IIFE` (Immedietly-invoked Function Expression). Detta gör vi för att vi ska strukturera vår kod samtidigt som vi använder oss av t.ex. `closures` för att skapa privata funktioner och variabler. Detta minskar risken för att vi får konflikter mellan olika delar av vår applikation och vi kan välja vilka funktioner och variabler vi låter vara synliga för resten av vår kod. Detta bygger på [`Principle of Least Privilege`](https://en.wikipedia.org/wiki/Principle_of_least_privilege)

__Om du vill använda någon annan kod än den vi använt i föregående lektioner så får du göra det. Huvudsaken är att du implementerar dessa mönster med någon sorts data: funktioner, variabler och objekt.__

1. Implementera ditt `CountryDatabase`-objekt med [Module Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript). Ett exempel på hur _Module Pattern_ är uppbyggt finns nedan och via länken.
2. Implementera ditt `CountryDataBase`-objekt med [Revealing Module Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript). Ett exempel på hur _Revealing Module Pattern_ är uppbyggt finns nedan och via länken.

##### Module Pattern

```javascript
var Module = (function(){
    var privateVariable = "Respect my privacy";
    return {
        getPrivateVariable: function(){
            return privateVariable;
        }
    }
})();

console.log(Module.getPrivateVariable());

```

##### Revealing Module Pattern

```javascript
var Module = (function(){
    var privateVariable = "Respect my privacy";
    var privateFunctionName = function(){
        return privateVariable;
    }
    return{
        publicFunctionName: privateFunctionName
    }
})();

//We can now call the function with it's public name
Module.publicFunctionName();

```


##### Extra

Blir du klar tidigt kan du testa att implementera något annat mönster i boken _JavaScript Design Patterns_, t.ex **Factory Pattern** eller **Singleton Pattern**.

#### Länkar

* [Constructor Pattern | JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript)
* [Module Pattern | JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
* [Revealing Module Pattern | JavaScript Design Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript)
* [Factory Pattern | JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript)
* [Singleton Pattern | JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)

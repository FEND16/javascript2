# Scopes & Closures

När vi pratar om scopes som menar vi oftast `lexical scope`. `Lexical scope` är det scope som variabeln eller funktionen är deklarerad i rent kodmässigt. Vilket `scope` en viss funktion eller variablen tillhör är inte alltid strikt bunden av dess `lexical scope`. Ibland kan kontexten (`context`) ändras beroende på hur vi kallar på funktioner samt hur variabler är tillgänliga i scopet. Se följande exempel.

```javascript

let data = [22, 33, 66, 60];

let database = {
    
    data: [ 33, 5, 6, 7],
    printDatabase: function(){
        for (let number of this.data){
            console.log(number);
        }
    }
}

```

Vi måste vara försiktiga med: 
__1)__ Inte lägga variabler i `global scope`
__2)__ inte skriva över våra existerande variabler genom att deklarera de två gånger, såkallat `variable shadowing`:

>In computer programming, variable shadowing occurs when a variable declared within a certain scope (decision block, method, or inner class) has the same name as a variable declared in an outer scope.

__3)__ Se upp med att kontexten ändras: `this`.

Dessutom måste vi se till att `this.data` pekar på rätt array. Som det är nu så kommer funktionen `printDatabase` få tillgång till egenskapen `data` i objektet. Men detta är inte alltid säkert, det kan bero på hur vi skrivit koden.


## Övning

Vi fortsätter med samma information som förra lektionen men nu ska vi strukturera den på ett annat sätt. Nu måste vi ha funktioner som är en del av ett objekt. Att samla allting i ett objekt är ett första steg till att göra koden mer strukturerad och 'typ' ett designmönster. Att strukturera koden på detta sätt visar tillhörighet i koden och så minskar det risken för `shadowing` och att man smutsar ner `global scope`.

Du ska skapa ett `CountryDatabase`-objekt där alla dina funktioner ska ligga. I detta objekt ska även arrayen med länder ligga. Du får ha färre eller fler länder. Man kan även ladda in listan med länder från en lokal `json`-fil om man vill. Huvusaken är att i de första övningarna ska vi se över hur vårt __scope__ och __context__ ändras beroende på hur vi lägger upp vår kod.

__1.__ Du ska implementera dina funktioner från i måndags. Du ska implementera dem så att de är bunda till själva objektet. Detta kan ske på två olika sätt. Du ska implementera de olika funktionerna på de sätten som är beskrivna nedan och få din kod att fungera efter att du är klar. När kan vi inte använda arrow function t.ex.?

__a)__ Som ett `object literal` 

```javascript
var obj = {
    func: function(){
    }
}

```

__b)__ Some ett `object literal` Med ES6 Arrow function `=>`

```javascript
var obj = {
    func: () => {

    }
}

```

__2__. Implementera en inre funktion inuti en av dina nyss implementerade funktioner som bara gör `console.log(this)`. Vilken `context` har funktionen och i vilket `scope` ligger funktionen? Kom ihåg att du måste kalla på den inre funktionen också i den yttre funktionen.

__3__. Skapa en eller flera __Factory function__ som inte är den nedan men ska fungera på liknande sätt, en funktion som är till för att skapar en annan funktion baserat på det föregående argumentet.

```js
function getCountriesBetweenForContinent(countries, continent){
    //The function returns a new function but saves countries and continent
    //as free variables
    return function(min, max){
      return countries.filter(country => {
        return country.population > min && country.population < max && country.continent == continent;
      });
    }
  }

//We call the function with the array and continent as arguments
//The arguments will be saved in a closure so the next function kan use them
const getCountriesForEuropeBetween = getCountriesBetweenForContinent(countries, 'Europe');

//Now we only have to supply the arguments for the inner functions. 
getCountriesForEuropeBetween(500000, 500000000);

```


##### Frågor till övningarna

Att tänka på när ni implementerar. Diskutera med grannen men inget som måste lämnas in.

* Hur ändras `this` beroende på hur du skapar dina funktioner? Vad är `this` för de olika implementationerna?
* Vilka olika scopes har ni i er kod? Räkna scopes. Vad räknas som ett scope? Vilka olika sorters scope har vi? Och vilka olika sorters scope har vi i ES6?


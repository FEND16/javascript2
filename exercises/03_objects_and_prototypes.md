# Objects & Prototypes

Objekt är nästan allt i JavaScript. Om vi ska spara större samlingar så använder vi oftast en array av objekt. Dessa objekt i sin tur kanske vi skapar med antingen en `Constructor Function` eller med `Object.create()`. Alla objekt i JavaScript har en `prototyp` som används för att dela funktioner och egenskaper mellan objektet för att man inte ska behöva repetera kod och för att visa tillhörighet. Du ska i denna övning öva på att skapa objekt på olika sätt, dels med `Constructor` och dels med `Object.create`.

>Detta är enbart två sätt att implementera detta och ingen av dem är direkt "standard". Det beror på vad du ska skapa för projekt, storlek, vad projektet
ska göra. Principen om prototypkedjan är dock densamma i varje implementation
som finns där ute. Det är viktigare att förstå prototypkedjan än att lära sig en enskild implementation. Samtidigt så är dessa två implementationer inte helst skiljda åt: man måste inte använda en implementation strikt, man kan blanda implementationerna.


##### Länkar att använda

* [Object.create() | A Drip Of JavaScript](http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html)
* [Inheritance with Constructor | A Drip Of JavaScript](http://adripofjavascript.com/blog/drips/basic-inheritance-with-javascript-constructors.html)
* [YDKJ - this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)


# Övningar

1. Du ska skapa en `Constructor`-funktion som ska skapa ett nytt `Country`-objekt. Denna `Constructor` behöver inte ligga inuti din `CountryDatabase` utan kan ligga i global scope.
2. Lägg till två funktioner på prototypen till denna `constructor`-funktion. Funktionerna kommer alltså att vara kopplade till `Country`s prototyp. Dina funktioner som du gjorde de föregående lektionerna ska alltså inte ligga i denna prototyp. Dessa funktioner skulle kunna vara funktioner som t.ex. loggar ut landets population eller liknande.
3. Kalla sedan på `Country`-funktionen och skapa två `Country`-objekt som du sedan pushar in i din array i din `CountryDatabase`. Du kan antingen bara pusha in objektet i arrayen eller skapa en funktion i `ConuntryDatabase` som pushar in ett objekt. 
4. Skapa en ny `City`-constructor. `City`-constructorn ska ha samma egenskaper som `Country` förutom att den ska ha en ny egenskap: `country` (landet staden ligger i) och `name` ska nu istället vara namnet på staden. Variablen `pFemale` måste inte vara med men du kan gärna ha med den om du vill.
5. Ändra på din `City`-constructor fast använd den här gången `call` för att kalla på `Country`-functionen för att återanvända dess parametrar. Kom ihåg att `City` nu har en ny egenskap: `country` som måste lagras och som inte finns i `Country`-funktionen.

```javascript
function City(){
    Country.call(obj, parameters);
}

```


6. Återskapa ovanstående funktionalitet med `Object.create`. För att skapa en prototyp åt ett objekt så måste du kalla på `Object.create` med ett objekt som innehar dina prototyp-funktioner.

#### Frågor till övningarna

* Varför heter det `Constructor function?` Vad gör egentligen en `Constructor` och vad gör en `constructor`?
* Finns det någon av dessa sätt att skapa objekt som är mest framstående på internet? Gör en sökning. Hur är inställningarna mot dessa två sätt att skapa objekt? Vilket sätt ska man använda?

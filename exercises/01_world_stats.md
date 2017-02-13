# Exercise - World Stats

Nedan är ett antal övningar som fokuserar på att skriva funktioner som loopar igenom en array med olika objekt. Att kunna gå igenom stora mängder data och plocka ut den informationen man behöver är viktigt i all sorts programmering. Därför är det bra att bli bekväm med hur man itererar igenom arrayer och objekt på olika sätt i JavaScript. Om du tycker att detta är för svårt så gå gärna tillbaka och kolla på gamla uppgifter från JavaScript 1: [JS1 - Exercises @ GitHub](https://github.com/FEND16/javascript1/tree/master/exercises)

I mappen [solutions](../solutions) ligger lösningsförslag på denna övning. Både på det "enklare sättet" och lösningsförslag på det "svårare sättet" med `map`, `reduce` och `filter`.

* [Map, Reduce, Filter | Dan Martensen Blog](https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter)

## Övning med objekt och arrayer

Använd datan i [Excercise Data](00_excercise_data.js) för att sedan skriva funktioner som besvarar nedanstående frågor. Dina funktioner ska alltså `returnera` eller `console.logga` svaret på frågan. 

Data är tagen från: [countrymeters.info](http://countrymeters.info) och man får lägga till egen data om man vill, så som ytterligare länder. Siffrorna i `.js`-filen är kanske inte helt up-to-date så man får uppdatera dem om man har sådana behov men annars är det fokus på att skriva själva funktionerna.

Lösningarna kan antingen klaras av genom att använda en vanlig `for`-loop och iterera igenom arrayen och ta ut egenskaperna ur varje objekt med _dot-notation_ men det finns också funktioner som `map`, `reduce` och `filter` och `forEach` som kan användas för att lösa övningarna.

##### Övningar

1. Skriv ut namnen på alla länder i databasen.
2. Hur många bor i hela (arrayen) världen?
3. Hur många bor i Europa?
4. Vilket land har minst befolkning i världen?
5. Vad är medelbefolkningen för länder i Afrika?
6. Finns det något land som har mer än 50000000 invånare?
7. Vilka länder har mellan 8 och 15 miljoner invånare?

##### Extraövningar

* Om du löste förgående uppgifter med vanliga `for`-loop, försök att lösa uppgifterna med `map`, `reduce` och `filter`.

* Skriv en egen funktion som behandlar någon annan data. T.ex går igenom `pFemale` variabeln eller om du hämtar ner någon ny data från länken: [countrymeters.info](http://countrymeters.info). En funktion skulle t.ex. kunna vara: _Vilken kontinent har högst befolkning?_ eller __Vilket land har högst andel kvinnlig befolkning?_.

##### Extra extra

* Använd DOM-manipulering för att visa om data på `index.html` istället för att enbart `console.logga`. Skapa en funktion som tar in sorterad data från dina redan implementerade funktioner och visar datan som en lista på din `index.html`.



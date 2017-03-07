# AJAX :mailbox:

<img align="right" src="http://i.imgur.com/QRlAg0b.png" alt="json-server">

Design Patterns uppgiften var till för att utforska designmönster samt få struktur på sin kod.<br/>
Designmönster hjälper en också att få bättre översikt över hur prototyper, scope och context samspelar. <br/>Dock så blir vi rätt begränsande eftersom vi hårdkodar all information i vår kod så blir inget `persistent`, när vi laddar om sidan försvinner informationen. Man kan delvis göra viss data långvarig genom att t.ex. utnyttja [`localStorage`](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/) och spara data i användarens webbläsare. Den informationen skiljer sig dock fortfarande från använder till användare. För att spara information på riktigt så behöver man ha en databas. 

Till kursen webbstandard använder vi en databas och ett *API* för att hantera album: [http://fend16.azurewebsites.net/albums](http://fend16.azurewebsites.net/albums). Denna databas är fortfarande igång och kan användas. Men man kan också hyffsat enkelt göra ett eget liknande **API** relativt enkelt.

### json-server

Nu när vi har _node_ samt _npm_ installerat och kan **typ** förstå oss på detta ekosystem kan vi använda oss av vissa verktyg för att lösa detta problem.

För att sätta upp en tillfällig lokal databas att kommunicera till via AJAX kan vi använda verktyget **[json-server](https://github.com/typicode/json-server)**.

**json-server** skapar som namnet antyder ett API som levererar json-data. Till detta API kan vi sedan göra API-anrop med `GET`, `POST`, `PATCH` och `DELETE` som tidigare. Allting sparas i en "databas" som egentligen bara består av en enda `json`-fil: `db.json`. I denna fil sparas alla nya objekt.

#### Installation

* Installera programmet globalt via `npm`:

```bash
npm install -g json-server
```


* Skapa sedan en `db.json` som ska innehålla din data. Detta är ett exempel på hur en sådan json kan se ut om vi t.ex. utgår från första inlämningsuppgiften:

```json
{
    "movies": [
    {
        "id":0,
        "title": "The Lobster",
        "year": 2015,
        "genres": ["Drama", "Sci-Fi"],
        "ratings": [8,7,8,6,9,9,10]
    },
    {
        "id":1,
        "title": "Porco Rosso",
        "year": 1992,
        "genres": ["Animation", "Adventure", "Comedy"],
        "ratings": [9,10,1,9,10,10,10]
    }
    ]
}

```
_egenskapen `id` kommer att öka automatiskt, vi behöver bara sätta id på den data som vi lägger in från start i `db.json`.

* Man startar sedan själva servern genom att ange den nyligen skapade databasen som argument till `json-server` från command line:

```bash
json-server --watch db.json
```

Nu borde ni ha ett eget lokalt API som ni kan använda och besöka på:

[http://localhost:3000/movies](http://localhost:3000/movies)
(_`/movies`_ ändras ju såklart beroende på vad ni döper egenskapen till i `db.json`)

Detta lokala API kan ni nu anropa via AJAX i er JavaScript-kod som vi tidigare gjort med hjälp av `XMLHttpRequest` och `fetch`.


## Övning - jQuery/fetch/XMLHttpRequest

Skapa en valfri databas med `json-server` med valfritt innehåll. Denna databas ska du använda för att öva på att använda dessa AJAX-funktioner.

Använd jQuerys `$.ajax()` eller någon av dess __shorthands__ för att utföra `GET`, `POST`, `PATCH` samt `DELETE` på innehållet i din databas.

Din kod ska kunna med hjälp av AJAX hämta och skicka data till din utvecklingsserver som du nyss satte upp. Detta ska din applikation minst kunna:

* Posta nytt innehåll till databasen (`POST`)
* Hämta allt innehåll i databasen (`GET`)
* Uppdatera ett specifikt objekt i databasen med ny data (`PATCH`)
* Ta bort ett specifik objekt i databasen (`DELETE`)

_Exempel på information man kan ha i databasen, vad som helst egentligen:_ movies, albums, horses, beer, cats, fried food, databases??, :cold_sweat:

Extra:
Implementera den grundläggande funktionaliteten med två av dessa standarder eller funktioner. Alltså om du tidigare i uppgiften använde `$.ajax()` för att lösa uppgiften, implementera uppgiften igen och använd t.ex. `fetch`.

#### Saker att tänka på

##### Async

**Kom ihåg att dessa funktioner körs asynkront. För det mesta måste alla variabler tilldelas i en callback annars är det inte säkert att informationen finns tillgänglig senare i koden.**

```js
var data = $.get('http://localhost:3000/movies');
//This code will return undefined, has not gotten the
//data yet because the 'get'-request is async, runs in the background.
console.log(data);
```


```js
var data = [];
$.get('http://localhost:3000/movies', (response)=> data = response;);
//Still not working, function is still async
console.log(data);
```


```js
var data = [];
$.get('http://localhost:3000/movies', (response)=>{ 
    data = response;
    //Only in the callback are we sure that data has been saved,
    //the anon function will run on success, when the response
    //has returned
    console.log(data);
});
```


##### contentType/dataType

Servern förväntar sig informationen i form av `json`-format. Se till så att din data är rätt formaterad och att dina AJAX-anrop använder sig av rätt `headers`. I ett `$.ajax()`-anrop kan man t.ex. vara tvungen att sätta `contentType` till `json` samt att använda dig utav `JSON.stringify()` samt `JSON.parse()` för att få ut rätt data:

```js
//Hardcoded data to post
var infoToPost = {
    title: "The Lobster",
    year: "2015",
    genres: ["Drama", "Comedy", "Sci-Fi"],
    ratings: [5,5,6,6,3,2,4]
};
$.ajax({
    method: 'POST',
    //Might need to set the contentType
    contentType: 'application/json; charset=UTF-8',
    url:'http://localhost:3000/movies',
    data: JSON.stringify(info), //Might need to stringify
    success: function(data){
      console.log(data);
  }
});
```



### Länkar

* [json-server](https://github.com/typicode/json-server)
* [Egghead | Creating Demo APIs with json-server](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)
* [Call Me Nick | Basic DOM-manipulation](http://callmenick.com/post/basics-javascript-dom-manipulation)
* [Call Me Nick | Some jQuery Functions And Their JavaScript Equivalents](http://callmenick.com/post/jquery-functions-javascript-equivalents)
* [jQuery API Reference](http://api.jquery.com/)
* [jQuery CDN](https://code.jquery.com/)
* [David Walsh | Fetch](https://davidwalsh.name/fetch)
* [jQuery AJAX](http://api.jquery.com/jquery.ajax/)
* [SitePoint | jQuery AJAX](https://www.tutorialspoint.com/jquery/jquery-ajax.htm)
* [W3Schools.com | AJAX Tutorial](http://www.w3schools.com/xml/ajax_intro.asp)


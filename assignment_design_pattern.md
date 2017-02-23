# Design Pattern Assignment - Movie Database

Denna __examinerande uppgift__ ska fokusera på att utnyttja de designmönster som finns tillgängliga för att strukturera upp sin kod. Samtidigt ska uppgiften hjälpa er att utforska _scopes_, _context_ samt _prototypkedjan_.

## Uppgift

Du ska skapa en applikation i JavaScript som är en **filmdatabas**. Till applikationen ska du implementera ett eller flera designmönster så som:

* _Contructor Pattern_
* _Prototype Pattern_
* _Module Pattern_
* _Revealing Module Pattern_

Mönstrena är inget som måste separeras från varandra och vilket mönster du använder är upp till dig. __Dock så måste du motivera varför du har valt att lägga upp koden som du gjort i dina kommentarer i koden.__

### Uppgiftbeskrivning

Ni ska skapa datastrukturer och funktioner för att hantera en lokal "databas" med filmer. Man ska kunna:

* Lägga till nya filmer
* Visa alla filmer
* Betygsätta en film
* Sortera ut filmer efter vissa kriterier så som: högst rating, sämst rating och filtrerat baserat på genre.
* Lägga till och ta bort genres från en film


###### Properties

För varje film ska ni ha ett objekt med åtminstone (det är tillåtet att skapa fler) följande egenskaper:

* `title` - filmens namn `(String)`
* `year` - årtal som den hade premiär `(Number)`
* `genres` - vilka genres som bäst matchar filmen `(Array)`
* `ratings` - alla betyg som en film har fått, av olika användare. _Betygskalan är 1-10 där 10 är högst_. `(Array)`

###### Functions

Ni ska skriva funktioner som man kan använda för att skapa, ändra och välja ut filmobjekt. Detta är de funktioner som ska minst finnas (sen behöver de inte heta exakt samma sak):

* `Movie(title, year, genres)` - skapar ett objekt och lägger värdet på parametrarna som egenskaper i objektet
* `rateMovie(movie, rating)` - lägger till värdet på parametern rate till egenskapen `ratings` i objektet `Movie`.
* `getTopRatedMovie()` - returnerar det objektet som motsvarar den film som har bäst genomsnittligt betyg.
* `getWorstRatedMovie()` - returnerar det objektet som motsvarar den film som har sämst genomsnittligt betyg. Räkna inte med filmer som inte fått något betyg än.
* `getMoviesThisYear(year)` - returnerar en lista över alla filmer som haft premiär året `year`.
* `getMoviesByGenre(genres)` - returnerar alla filmer som har samma genre som värdet på parametern genre (ska kunna filtrera på flera genrer)


```javascript

//Example of a movie object

let movieExample = {
    title: 'The Lobster',
    year: 2015,
    genres: ['Comedy', 'Drama', 'Romance', 'Sci-Fi'],
    ratings: [5, 4, 5, 5]
}


//You can add new properties if you want.

let exendedMovieExample = {
    title: 'The Lobster',
    year: 2015,
    cover: 'https://media.senscritique.com/media/000011963740/source_big/The_Lobster.jpg',
    genres: ['Comedy', 'Drama', 'Romance', 'Sci-Fi'],
    ratings: [5, 4, 5, 5],
    actors: [
    {
        name: "Colin Farrell"
    },
    {
        name: "Rachel Weisz"
    }
    ]
};

```

__Det är tillåtet att lägga till fler properties till ett objekt och att lägga till fler funktioner än de som är listade här men dessa är de grundläggande man måste ha med.__

## Betyg

__G:__

* Kan utföra alla nödvändiga delar som listas i [Uppgiftsbeskrivning](#uppgiftsbeskrivning)
* Använder dig utav ett eller flera designmönster för att lägga upp din applikation och har struktur bland dina funktioner.
* Motiverar valet av designmönster. Varför har jag använt det här sättet att lägga upp min kod på? Fördelar? Nackdelar? (Skriv detta i dina kommentarer i koden eller i `README.md`).
* Kommenterar kortfattat de viktigaste delar av din kod på ett tydligt sätt (på engelska).
* Inga globala variabler förutom dina egna namespaces.
* Skriver funktioner som är väl avgränsade och som har en specifik uppgift att utföra. 

__VG:__

* Allt som står i __G-kraven__ samt: 
* Använder dig utav ES6: `let`, `const` och `=>` där det behövs och kan användas.
* Visar att du kan använda dig av prototypkedjan och väl kommenterar hur denna prototypkedja fungerar i din kod där du utnyttjar den.
* Har ett _interface_ (`index.html`) i HTML/CSS där man kan:
    - Visa en lista på alla filmer
    - Lägga till en ny film m.h.a. formulär/input-fält
    - Sätta betyg på en film
    - Filtrera efter genre och betyg

## Inlämning

_Sista inlämningsdag för första iterationen_: **1/3** kl. **07.00**

**När ni lämnat in kommer ni sedan få tillbaka feedback på uppgiften och sedan får ni lämna in en slutgiltig version vid slutet av kursen. Lämnar du dock inte in något den 29:e så får du komplettering. Om du lämnar in något som märkbart bara är inskickat för att slippa komplettering och inte är ett försök att klara uppgiften får du också komplettering.**.

_Betyg_: **G/VG**

_Lämnas in på studentportalen under_: **Inlämningsuppgift 1: Designmönster**

_Lämnas in enligt följande namnmönster och följande format_:

`fornamn_efternamn_movie_database.zip`

**Om du har ett GitHub-repo uppe till ditt projekt så länka till det repot i din README.md**.


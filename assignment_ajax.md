# AJAX Assignment - Open APIs :satellite:

<img align="right" width="180" height="auto" src="http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg" alt="JavaScript Logo">

De flesta applikationer och hemsidor på webben idag är dynamiska och hämtar data från olika servrar kopplade till speciella tjänster. Sättet vi kommer åt informationen är oftast via ett **API** (Application Programmable Interface). Detta brukar oftast vara ett **ReST API** som levererar `json`-data. Vi har tidigare använt t.ex. `json-server` för att skapa vårt eget API men nu ska vi hantera data via AJAX från ett API som tillhör någon annan.

## Uppgift :pencil:

Du ska skapa en applikation som hämtar data från ett eller flera öppna APIs och visar upp denna data på en `html`-sida. Vilken data du hämtar och hur den visas upp är upp till dig och baserat på vilket/vilka APIer du väljer. Exempel på vilka API:er du kan använda till uppgiften finns i listan nedan.

Du får använda antingen `vanillaJS` eller `jQuery` för att lösa uppgiften. Om du vill använda någon annan teknologi/bibliotek/ramverk så går nog det bra bara du kollar av med mig innan du börjar använda det. Huvudfokusen för denna uppgift ska vara att hämta och hantera information asynkront via AJAX.

Du får använda jQuerys `$.ajax()`-metod, `fetch` eller `XMLHttpRequest`  för att hämta informationen från ett öppet API. Vilken metod för att hämta hem data är upp till er bara den hämtas via AJAX och laddas in dynamiskt.

Du får även använda ett `css`-ramverk som t.ex. _Bootstrap_ för att strukturera upp själva sidan. 

**Se till att ha ett tydligt mål med vad du ska bygga innan du sätter igång. Gör upp en lista över vilken funktionalitet som ska finnas, hur det ska se ut etc. (tänk på hur ni jobbade under HTML/CSS-kursen). Lägg tid på förarbetet.**


#### Listor på APIer att använda


* [**Public APIs** by _toddmotto_ @ GitHub](https://github.com/toddmotto/public-apis)
* [**Public APIs** by _abhishekbanthia_ @ GitHub](https://github.com/abhishekbanthia/Public-APIs)
* [Programmable Web API Directory](https://www.programmableweb.com/category/all/apis)
* [API-katalogen](http://apikatalogen.se/)

### Mål med uppgiften :dart:

Målet med uppgiften är att få en bättre översyn över hur AJAX och **asynkront** JavaScript fungerar. API-hantering är en stor del av frontendyrket och därför är det viktigt att ha god förståelse över hur asynkrona anrop via AJAX hanteras i JavaScript oberoende av vilken metod eller funktion man använder för att hantera anropen.

## Krav för G 

##### Koden: 

* **Hämtar data från ett eller flera öppna APIer som serverar data i form av `json`.**
    - **Du ska göra flera olika anrop till APIet** och **inte** bara 1 simpel `get`-request till APIet och visa upp resultatet.
* **Visar upp hämtade data på ett strukturerat sätt i `html`**. 
* **God kodstruktur där du använder namespaces** och tydligt separerar delarna av din kod logiskt. (T.ex. använde ett _Design Pattern_ så som föregående uppgift)
* Du genomför projektet självständigt och skriver all kod själv samt att du förväntas kunna berätta om all din kod och visa att du behärskar det du skrivit.
* Du **uppvisar god förståelse för AJAX och asynkron kommunikation** och hur man jobbar asynkront i JavaScript.
* Du **error-hanterar dina anrop** och all eventuell input från `input`-fält. Använder t.ex. `error`-function i `$.ajax()`-anrop etc.
* Du använder **semantisk och tydligt strukturerad HTML5** och har en **responsiv design**. (Förslagsvis löses den responsiva delen enkelt med ett `css`-ramverk)
* Din `html`, `css` och `js` är:
    - Fungerande
    - Korrekt indenterad
    - Väl strukturerad och lättläst
    - Kommenterad efter behov (t.ex. vid mer svårlästa funktioner så ska kodflödet kommenteras)
* **Projektet versionshanteras både lokalt och via GitHub**

##### Projektet: 

* Din kod ska finnas på __GitHub__ och ha en tydlig `README` med följande information:
    - ditt namn, kurs och utbildning
    - länk till projektet live
    - kort beskrivning av applikationen, dess syfte och funktionalitet.
    - punktlista med vilka teknologier du använt.
    - kort beskrivning av det API/APIer du använt samt länk till dem.
    - kortfattat om din arbetsprocess och vad som skulle kodmässigt kunna förbättras. Man kan t.ex. ha en "TODO"-sektion i ens `README` med saker som skulle kunna implementeras om tid fanns.
* **Projektet ska kännas som en färdig produkt**



[Markdown Cheat Sheet för att skriva README](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Krav för VG

* Användaren kan på något sätt styra över vilken information som hämtas, d.v.s. någon form av urval finns som exempelvis ett sökfält, kategorier eller liknande som man kan filtera innehållet via. Vid filtering ska ett nytt AJAX-anrop skickas till APIet/APIerna med sökning eller filtreringskriterierna.
* Ditt gränssnitt är tydligt gentemot användaren när data laddas och när data är färdigladdat från servern. T.ex. har en loading-indikator som indikerar när information laddas in.
* Uppvisar kunskap om `context` samt `scope` och hur synkrona och asynkrona funktioner exekveras i relation till `context` och `scope`.

## Presentation av kod :speaker:

Ni presenterar projektet live för läraren på sista lektionstillfället.
Ett presentationsschema kommer att läggas upp på GitHub, Studentportalen och i Slacken när vi närmar oss presentationstillfället.

Då ska du visa hur applikationen fungerar

* Demo av applikationen
* Visa och förklara de viktigaste delarna av din applikation
* Var beredd på att få frågor på hur du har kodat

### Inlämning av kod

_Betyg_: **G/VG**

_Sista inlämningsdag_: **31/3** kl. **23.55**

_Lämnas in på studentportalen under_: **Inlämningsuppgift 2: AJAX**

_Lämnas in enligt följande namnmönster och följande format_:

`fornamn_efternamn_ajax.zip` 

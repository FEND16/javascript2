# :zap: Node, npm & Byggverktyg

<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="Node.js logo" align="right" width="300px" height="auto">


Node kan beskrivas som en körmiljö (runtime environment) för JavaScript-kod. I vanliga fall kör vi alltid vår kod genom just webbläsare eftersom webbläsare har en inbyggd motor (V8-engine) som tolkar koden åt oss. Utan en sådan JavaScript motor kan inte koden köras. _Node_ gör det möjligt att köra kod via samma motor fast utan webbläsare.

Med _Node_ kan man t.ex. bygga en webbserver i enbart JavaScript, något som tidigare inte varit möjligt. Eftersom vi inte behöver en webbläsare kan vi istället köra koden via en `terminal` (kommandotolken) precis som när vi kör `git`.

Först måste du installera Node: [https://nodejs.org/en/](https://nodejs.org/en/)
Vilken version du använder spelar inte så stor roll bara den går att använda i terminalen. Du kan behöva starta om datorn efter installation ibland för att terminalen ska fatta att det installerats.

Om du har Node installerat så kan du skriva kod och köra kod direkt i terminalen:

```bash
# Check that Node is installed
node --version
```

```bash
# Start node runtime
node
```

```bash
## Write in bash/cmd like you write code in Developer tools
var a = 5;
var b = 5;
a + b;
```

### Köra scripts via node

Detta gör att vi även kan köra `js`-filer via _Node_:

```
node main.js
```

Kom ihåg att du inte kan köra DOM-manipulationer när du kör din kod på detta sätt eftersom _Node_ inte har `window` utan istället använder sig utav `global`.

# Node Package Manager

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2000px-Npm-logo.svg.png" alt="" align="right" width="200px" height="auto">
Vi ska inte fördjupa oss i att skriva node-applikationer utan vi ska bara använda oss av redan existerande program. Med _Node_ medföljer en såkallad pakethanterare som gör det möjligt att installera färdiga program via terminalen. Dessa kan antingen installeras globalt (tillgängliga för hela datorn) eller lokalt (bara tillgängliga för det projektet du jobbar i).


### Installera moduler globalt med Node Package manager

Hela _Nodes_ ekosystem bygger på att man delar kod, specifikt så delar man paket, även kallade _moduler_. Dessa _moduler_ är oftast JavaScript-bibliotek/plugins/paket som man installerar för att använda i sitt projekt. Om ni tänker på när ni använde Bootstrap t.ex. så **lånade** vi ju in den koden genom att länka via `html`. Detta kunde ske genom att antingen lägga Bootstrap i en mapp i projektet eller via en _CDN_. Med `npm` lånar vi in färdig kod för att använda i vårt projekt (lägger den i en mapp i projektet), vad den inlånade koden är för något beror på vilka uppgifter vi ska utföra.

#### Exempel på modul

Säg att vi vill ha ett enkelt program för att minifera JavaScript, d.v.s. komprimera och minska storleken på en av våra JavaScript-filer. Detta kan man göra på sidor som: [Minifer](http://www.minifier.org). Men det är ju skönare att ha ett program som gör det lokalt på datorn och som inte tar upp massa plats. `npm` har just flera olika moduler som gör just denna uppgift och som heter just [Minifier@npm](https://www.npmjs.com/package/minifier). För att installera och använda en sådan _modul_ kan vi använda oss av terminalen:

```bash
npm install -g minifier
```

**Alla moduler man installerar global kan sedan användas direkt från terminalen via dess namn, likadant som `git`**

Så om vi vill nu använda denna modul (tänk på det som ett program som enbart körs via terminalen) kan vi använda dess namn, följt av ett antal parametrar:

```bash
#example
minifier main.js main.min.js

#It follows the following pattern
minifier inputfile.js outputfile.js
```

Detta är liknande som vi gjorde med `sass`. Vi kan även som med `sass` välja att konvertera hela mappar eller filer enligt ett visst mönster.

Vilka paket man än söker, ska man t.ex. autoprefixa CSS så finns det _moduler_ som gör det också och allt går att hitta via en sökning i npms register: [https://www.npmjs.com](https://www.npmjs.com)

### Installera paket lokalt med Node Package Manager

Många program kan installeras globalt och borde vara installerade globalt. Men ofta vill man installera _moduler_ lokalt. När vi installerar _moduler_ globalt med `-g` parametern så hamnar de _modulerna_ i en gemensam mapp så att terminalen vet hur terminalen ska komma åt programmet:

* `C:\Users\$USERNAME\AppData\Roaming\npm` på Windows
* `/usr/local/lib/node_modules` på Mac

Detta är dock inte bra i samtliga fall, ibland vill vi installera kod/program lokalt i projektet vi jobbar med. Vi lägger ju `bootstrap.min.css` i vår projektmapp för att vi ska veta var vi har den och vilken version av bootstrap det är. **Tänk att du har `Bootstrap 4` som globalt installerad modul (`-g`). **Tänk sedan att du har 3 olika bootstrap-projekt på datorn. Det ena måste använda `Bootstrap 3` och de andra två ska använda `Bootstrap 4 alpha`**. Bootstrap 3-projektet kan inte därför referera till den globalt installerade _modulen_ utan vi måste ha en separat _modul_. Då kan vi installera _modulen_ lokalt.

#### `git init` och installation lokalt

Innan vi börjar installera lokalt måste vi köra `npm init`.

Liknande som `git init` för att initiera ett tomt repository med `git` så använder vi `npm init` för att initera `npm` i ett projekt.

```bash
npm init
```

Nu kommer man få upp massa frågor som man ska svara på. För det mesta är det bara att trycka `enter` 9-10 gånger tills man allting är färdigt. Här kan man döpa om sitt projekt, skriva in vem som har gjort det och massa andra egenskaper men det går bra att bara trycka `enter` och köra på defaultvärden:

![npm init sequence](https://i.imgur.com/aa4fPmi.png)

Detta kommando kommer att genrera en `package.json`-fil i vårt projekt. Denna fil innehåller alla våra inställningar som har med projektet att göra. Filen är inte bunden till mappen, det är bara en fil med inställningar på samma sätt som att `git init` skapar en mapp som heter `.git`. Vi kan lätt ta bort, byta ut eller modifiera den är filen. Vad namnet på vårt projekt heter i `package.json` är inte bundet till vad mappen heter, det går att ändra hursom. Filen är främst till för att hålla reda på vilka olika _moduler_ vi senare ska installera. Varför detta är en __Bra Grej__ ska vi återkomma till.


#### `--save-dev` && `--save`

För att nu installera lokalt så använder man flaggorna `--save-dev` och `-save` istället för att använda `-g`. När du installerar en modul på detta sätt händer främst två saker:

```bash
npm install --save-dev minifer
```

1. Du sparar modulen i en ny mapp som skapas i ditt projekt som heter `node_modules`. Alla dina moduler som du installerar lokalt i ett projekt som du installerar lokalt hamnar i `node_modules`. Lokalt installerade _moduler_ kan inte användas direkt från terminalen som globalt installerade _moduler_ men kan lätt användas av själva projektet lätt.
2. Du lägger till _modulen_ som ett **dependency** till ditt projekt, något som du måste ha installerat för att kunna använda dig av _modulen_. Om du tittar i `package.json` så ser du nu att `devDependencies`-egenskapen har fyllts på med din nyligen installerade modul.

Alla moduler som ditt projekt behöver finns nu sparade i config-filen `package.json`. Detta betyder att du kan dela med dig utav din config-fil utan att behöva inkludera dina moduler. Standard är t.ex. att man lägger till sin `node_modules`-mapp i `.gitignore` för att slippa ladda upp den till t.ex. GitHub. Detta går bra eftersom när någon klonar ditt projekt så har de din config-fil (`package.json`) och det är det enda som behövs. Personen som klonar ditt projekt kan sedan skriva i terminalen:

```bash
npm install
```

Så kommer `npm` att installera alla nödvändiga __dependencies__ i `node_modules`-mappen. All information som behövs finns i `package.json`.

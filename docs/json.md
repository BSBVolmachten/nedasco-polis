De data bestanden
---
JSON staat voor javascript object notation en is een vrij eenvoudige manier van gestructureerd data op te slaan. Het is tegenwoordig 
de standaard op het web en wordt dus ook door alles en iedereen ondersteund. Voordat er verder gelezen wordt is het
sterk aangeraden om eerst de basis van JSON door te nemen op [deze website](https://developers.squarespace.com/what-is-json).
Gezien het feit dat veel uitleg over JSON niet geschreven is voor lezers zonder technische achtergrond volgt er nu een
hoofdstuk waarin kort uitgelegd wordt wat JSON nu eigenlijk is zonder al te veel technische termen. Als je de link 
gelezen hebt en het is al helemaal duidelijk, dan kan het JSON onderdeel overgeslagen worden, maar dat hoeft natuurlijk niet.

#### JSON
Javascript(JS) Object Notation, ofwel JSON is een databestand dat een gestructureerde notatie aanhoudt welke overeen komt
met de notatie zoals die in Javascript code voorkomt. Het heet niet voor niets een 'Object Notation'. In JSON is alles 
namelijk gestructureerd door middel van het groeperen van data in objecten. Zo'n object is te herkennen aan de accolades:
```text
{
 ...
}
```
Deze accolades, en dus objecten, vormen de basis van een JSON bestand. Ieder JSON bestand begint daarom ook altijd met
een open accolade, en eindigt met een gesloten accolade. In zo'n object willen we data op slaan, en het liefst zo 
logisch mogelijk. De logica komt voornamelijk door structuur die de gebruiker zelf in bouwt en hanteert, en zo zullen ook 
onze labels / regels een eigen stramine aanhouden. Verdere uitleg volgt in latere hoofdstukken.

Allereerst is het nodig om te laten zien hoe objecten hun data vast houden. In een excel bestand bijvoorbeeld, staat alles
netjes in kolommen of rijen ingedeeld. Wat hierbij cruciaal is is het aangeven van de locatie van deze waarde. De rijen
en kolommen samen geven een makkelijke manier van het aangeven waar de data zich bevindt, namelijk de letter-cijfer 
combinatie. Zo is linksboven bijvoorbeeld de cell 'A1', en rechts naast deze cell is 'B1'. Hieronder een voorbeeld van
een Excel tabel:

|  | A    | B  | C     |
|---|------|----|-------|
| 1 | dit  | is | de    |
| 2 | data | in | excel |

In dit geval is de 'data' van de tabel: 'dit is de data in excel'. De data is verdeeld over verschillende cellen, en de 
locatie is A1 tot en met C2, ofwel A1:C2. In het volgende onderdeel focussen we op een individueel datapunt, een cell.
Daaropvolgende onderdelen zullen laten zien hoe meerdere datapunten een logische vorm van gegevens op slaan kan zijn,
net zoals rijen en kolommen in een Excel bestand.

##### Waarden in een JSON bestand
Vergelijkbaar met hoe een cell in Excel een locatie aanduiding heeft (bijvoorbeeld A3 of D19), heeft JSON dit ook. Alleen de aanduiding
in JSON moet zelf verzonnen worden door middel van een stukje tekst tussen twee dubbele aanhalingstekens. Achter de 
locatie komt een dubbele punt, en daarna volgt de data die bij deze locatie hoort. Hieronder een voorbeeld:
```json
{
  "A1": "dit"
}
```
In het voorbeeld is te zien dat de locatie 'A1' is, en hierbij de waarde 'dit' hoort. Net zoals in ons Excel bestand.
Nu zouden we alle cel-aanduidingen kunnen overnemen en in JSON opnieuw noteren in een andere vorm, maar dat is natuurlijk
niet de insteek van het gebruiken van JSON. Wat bij Excel in de titelregel gedaan wordt, het aangeven wat een datapunt
weergeeft, kan bij JSON in het object gedaan worden, door de aanduiding een omschrijvende naam te geven. Neem de volgende
tabel:

|   | A     | B            |
|---|-------|--------------|
| 1 | Label | Omschrijving |
| 2 | 10142 | branche      |

Als we deze tabel lezen is het de data redelijk duidelijk: Het label 10142 heeft de omschrijving 'branche'. Zo ook in
JSON:
```json
{
  "label": "10142",
  "omschrijving": "branche"
}
```
Ook hier is het voor de hand liggend: het label is '10142' en de omschrijving die daarbij hoort, is 'branche'. De 
aanduidingen van waarden in een JSON object noemen we vanaf nu **properties** (enkelvoud: property). "label" en "omschrijving" 
zijn dus **properties** van het json object. De waarden zijn nu niet meer aan te duiden met 'A2' of 'B2', maar met 'label'
en 'omschrijving'. De waarde van 'label' in dit object is dus "10142", en de waarde van 'omschrijving' is "branche".
Dit luidt het nieuwe onderdeel in: de soorten data / waarden.

##### Soorten waarden
Een property kan verschillende soorten waarden hebben. Zoals in Excel bijvoorbeeld een celeigenschap 'notatie' bestaat, met
als waarde 'getal', 'datum', 'tekst' etc., bestaan ook in JSON verschillende soorten waarden. In Excel wordt echter
een celeigenschap meegegeven om aan te duiden welk soort de waarde is. In JSON wordt dit gedaan door een 
andere manier van noteren. Er bestaan 3 basis soorten (Integer, String en Boolean), en 2 geavanceerde soorten (Array, Object).
 
###### Integer (getal)
In JSON wordt een getal een 'integer' genoemd, dit is redelijk voor de hand liggend wat betreft notatie: gewoon een getal.
Er hoeven geen aanhalingstekens om het getal heen gezet te worden. Dit laat de parser (iets wat de tekst analyseert) weten
dat het gaat om een getal. **Let wel op, decimalen worden aangeduid met een punt '.', en niet een komma ','!**. Dit ziet 
er als volgt uit:
```json
{
  "getal": 24.2
}
```

###### String (tekst)
In JSON wordt een stuk tekst een 'string' genoemd. Dit kan een woord zijn, een letter, maar ook een of meerdere hele 
zinnen. Een string wordt altijd geopend en gesloten met dubbel aanhalingstekens. Dit zit er als volgt uit:
```json
{
  "string": "Dit is een regel tekst!"
}
```

###### Boolean (Ja/Nee)
In JSON (en de hele computer wereld) bestaat ook een Ja/Nee waarde, genoemd naar een 
[Britse wiskundige / logicus George Boole](https://nl.wikipedia.org/wiki/George_Boole): de boolean. Dit wordt aangegeven
met twee mogelijke waarden: **true** en **false**. Hier hoeven geen dubbele aanhalingstekens om heen. Dit ziet er als 
volgt uit:
```json
{
  "boolean": true
}
```

###### Array (lijst)
Een van de meer geavanceerde soorten waarden zijn Array's of lijsten. Dit verklapt eigenlijk al wat het is: een 
opsomming van waarden. De notatie is ook heel simpel: de opsomming begint met een open nietje '\[' en sluit met een gesloten
nietje '\]'. De waarden worden gescheiden met een komma ','. Alle andere soorten waarden kunnen in deze opsomming voor komen. 
Dit ziet er bijvoorbeeld zo uit:
```json
{
  "array": ["dit is en string", 10.42, false, "nog een string", true]
}
```

###### Object 
Misschien niet verrassend, maar het 'object' waar we het voortdurend over hebben, zoals ook JSON, is ook een 
soort waarde. En zoals ook eerder beschreven, we noteren een object met accolades, met daarin alle properties die we 
zelf willen. Hier onder een voorbeeld van een leeg object (een object zonder properties):
```json
{

}
```
En een object met 1 property, genaamd 'key' met als waarde een nieuw (leeg) object:
```json
{
  "key": {}
}
```
En bij deze hebben we de kracht van JSON meteen te pakken, namelijk: de combinatie van lijsten en object, die weer in
andere lijsten en objecten staan. Een ingewikkeld voorbeeld hiervan is bijvoorbeeld:
```json
{
  "array": [
    "dit is een string",
    {
      "waarde": 10.2,
      "lijst": ["een", "lijst", "met", "woorden"]
    },
    false,
    ["dit is een string in een lijst in een lijst", { "property": "dit is de (string) waarde van een property in een object in een lijst in een lijst" } ]
  ]
}
```
Dat ziet er ingewikkeld uit, en dat is het ook... helemaal niet nodig! Maar het demonstreert precies
waarom JSON zo mooi is om mee te werken. Bij Excel is het vaak erg eenzijdig (met data opslaan), je hebt rijen en kolommen, daar moet je het
mee doen. Bij JSON daarentegen is het mogelijk om de data precies te structureren zoals jij het wil, als er maar een 
duidelijke beschrijving is van hoe de data genoteerd moet worden. Zelfs rijen en kolommen kunnen op meerdere manieren
efficient in JSON opgenomen worden. Dit gaan we gedeeltelijk zien in het polis project. 


De denkwijze / structuur
---
Bij een polis is er gezocht naar de opsplitsing in een zo klein mogelijk item wat samenhangt, en onafhankelijk van 
andere items leeft op zo'n polis. Hier kwamen we al snel uit op regels. 

Voor de goede orde: bij bsb heet dit van oudsher 
Label omdat dit vanuit een basis label opgebouwd en uitgebreid is (dus niet vanuit ANVA), 'regel' beschrijft beter wat het
inhoudt, en wordt ook in ANVA terminologie gebruikt bij het moment van afdrukken. Een regel kan ook meerdere labels
bevatten, dit kan voor verwarring zorgen... excuses hiervoor.

Een regel staat vaak los van andere regels, en kan hierdoor ook goed als losse entiteit behandeld worden. Een regel
heeft vaak een omschrijving, zoals bijvoorbeeld: 'Soort verzekering', en een waarde, zoals bijvoorbeeld: het label 10142.
Op de polis wordt getoond:
```text
Soort verzekering           : Personenauto
```
en in ANVA staat:
```text
Soort verzekering           : ^ 
```
Het hoedje staat voor label 10142, weergave: omschrijving, regel verwijderen indien leeg. Hier wordt al duidelijk, 
als je enige informatie weg haalt, dan klopt de regel niet meer. Alleen 'Soort verzekering' is niet genoeg voor het
omschrijven van deze regel. Zo ook het toevoegen van informatie is eigenlijk overbodig. Stel dat er een regel toegevoegd
wordt:
```text
Soort verzekering           : ^ 
Gezinssamenstelling         : ^
```
Hier is een nieuwe regel toegevoegd, maar deze nieuwe regel zegt eigenlijk helemaal niks over de eerste regel. Ze zullen
ook los van elkaar aangepast, en ook los van elkaar gecontroleerd worden. Ze horen in het geheel wel bij elkaar op de
polis te komen, maar als losse entiteit kunnen we ze beter gescheiden houden.

Hier een voorbeeld van hoe dit in het functioneel ontwerp uit ziet:

| omschrijving        | inhoud             | weergave                  | uitlijnen | regel verwijderen | regel template                                  | P311
|---------------------|--------------------|---------------------------|-----------|-------------------|-------------------------------------------------|------
| Soort verzekering   | 10142              |                           |           |                   | 02 Soort verzekering         10142              | x    
|                     | 10142              | Omschrijving              | Links     | niet verwijderen  |                                                 | x    

Er wordt hier beschreven wat de tekstuele omschrijving is van deze regel, welk label er in zit en enkele voorwaarden. Dit
kan natuurlijk ook netjes in JSON, zie hier een voorbeeld:

```json
  {
    "omschrijving": "Soort verzekering",
    "inhoud": "${10142o}",
    "vereiste_labels": [],
    "type": "standaard",
    "maatschappij": ["P311"]
  }
```
Hoewel het meeste voor zichzelf spreekt, ook een enkele uitschieter: 
- wat zijn 'vereiste labels', 
- wat is het type
- waarom staan er accolades om het label, en 
- waarom staat er een o achter het label. 

Dit is als volgt te verklaren.
- de vereiste labels zijn de labels die nodig zijn om de regel op papier te zetten. zijn de labels niet aanwezig of leeg,
dan wordt deze regel niet op het papier gedrukt
- er staan accolades om het label om aan te geven dat dit een label nummer is zoals dat in ANVA voor komt, en dit vervangen
moet worden met de waarde van dat label, bijvoorbeeld 'Personenauto'
- de o achter het label zegt ons dat dit een coderingslabel is, en dat we de weergave 'Omschrijving' van dit label willen
gebruiken.

Alle eigenschappen hebben een eigen onderdeel in de handleiding, en dus ook regel type. Voor uitleg over 'type', check
het desbetreffende onderdeel.



## Voorbeeld tabel fuctioneel ontwerp bodyblock
De volgende tabel is een voorbeeld van een functioneel ontwerp van een bodyblok van een polis. De 'regel template' is
weg gelaten.

| omschrijving        | inhoud             | weergave                  | uitlijnen | regel verwijderen | regel template                                  | P311 | P368 | P375 |
|---------------------|--------------------|---------------------------|-----------|-------------------|-------------------------------------------------|------|------|------|
| Soort verzekering   | 10142              |                           |           |                   | 02 Soort verzekering         10142              | x    | x    | x    |
|                     | 10142              | Omschrijving              | Links     | niet verwijderen  |                                                 | x    | x    | x    |
| Risico adres        | 10708 10710 10711  |                           |           |                   | 03 Risico adres              10708 10710 10711  | x    | x    |      |
|                     | 10708              |                           | Links     | verwijderen       |                                                 | x    | x    |      |
|                     | 10710              | Getal exclusief decimalen | Links     | niet verwijderen  |                                                 | x    | x    |      |
|                     | 10711              |                           | Links     | niet verwijderen  |                                                 | x    | x    |      |
| Eigen risico        | € 10043 Vrijwillig |                           |           |                   | 10 Eigen risico              € 10043 Vrijwillig |      |      | x    |
|                     | 10043              | Getal inclusief decimalen | Links     | verwijderen       |                                                 |      |      | x    |
| Gezinssamenstelling | 10694              |                           |           |                   | 10 Gezinssamenstelling       10694              | x    |      |      |
|                     | 10694              | Omschrijving              | Links     | verwijderen       |                                                 | x    |      |      |

# Het Regel Object

Het regel object is het JSON object wat een (of meerdere) regels beschrijft. De inhoud, de condities en de stijl van een
regel worden hierin beschreven. Ieder onderdeel wordt beschreven door een property binnen het object. Als dit je niet bekend
voor komt dan is het verstandig als je het JSON (link naar json) onderdeel van de documentatie nog even door leest.

We zullen een voor een de properties doorlopen, zodat het aan het einde van de rit duidelijk is wat je kan aantreffen binnen
zo'n regel object, en waar alles voor staat.


### Omschrijving (String)
```json
{
  "omschrijving": "Kenteken"
}
```

De omschrijving van een regel is vrij eenvoudig. Het is de tekst die aan de linkerkant van de pagina de omschrijving geeft
van de regel. Als voorbeeld hebben we hier kenteken gepakt. 

### Inhoud (String)
```json
{
  "inhoud": "${10033}"
}
```

De inhoud van een regel in de tekst die achter de omschrijving komt te staan. Dit is meestal de waarde van een label uit
ANVA, maar kan soms ook gewoon statische tekst zijn. Indien het een label uit ANVA betreft, zetten we wel nog even een dollar
teken, met accolades ervoor. Zie het voorbeeld hierboven. Dit laat de parser weten dat we dit stukje tekst moeten opzoeken
in de data die we van ANVA gekregen hebben. Zo kunnen we nog steeds getallen die lijken op een labelnummer gebruiken zonder
dat deze vervangen worden door de waarde die uit ANVA is gekomen.

### Extra Omschrijving (String)
```json
{
  "extraOmschrijving": "inclusief BTW"
}
```

De extra omschrijving is eigenlijk een extra stukje informatie wat bij deze regel hoort. Zie hierboven bijvoorbeeld 'inclusief BTW'
als extra omschrijving bij een bedrag. Dit komt na de inhoud op het polisblad te staan. Waar het komt te staan is afhankelijk
van het type regel. Meer hierover in het onderdeel 'type' en in de style guide het polisblad.

### Type (String)
```json
{
  "type": "standaard"
}
```

Het type van de regel bepaalt hoe de regel er uiteindelijk uit ziet op het polisblad. Er zijn vooraf gedfiniëerde types
die gedocumenteerd zijn binnen de style guide van het polisblad. Hierover meer in de style guide (link). 

### Vereiste Labels (Array<String>)

```json
{
  "vereiste_labels": ["10033"]
}
```

De vereiste labels zijn de labels die vereist zijn om deze regel te laten zien. Hiermee wordt bedoeld dat een label gevuld
moet zijn (met wat is niet relevant). Als er dus een leeg label aangetroffen wordt zal de hele regel niet op het polisblad
verschijnen. De wat uitgebreidere controles komen nog aan bod in het onderdeel 'Condities'.

### Maatschappijen (Array<String>)
```json
{
  "maatschappijen": ["P301"]
}
```

De maatschappijen zijn zoals je verwacht: de regel geldt uitsluitend voor de maatschappijen die in de lijst staan. In bovenstaand
voorbeeld is de regel dus alleen geldig voor maatschappij P301, en zals niet op het polisblad komen bij andere maatschappijen.
Er geldt hier een uitzondering, waarbij er fallback polissen zijn op branche niveau. Hier zullen dan de branches worden
genoemd in plaats van de maatschappijen. Dit zal voorkomen in de 'hoofdbranche' JSON bestanden, waarin de fallback branches
zijn opgenomen. 

### Condities (Array<Integer | Conditie | Array>)

```json
{
  "omschrijving": "Kenteken",
  "condities": [
    1,
    {
      "labels": [
        "10020"
      ],
      "waarden": [
        "10"
      ]
    }
  ]
}
```

De condities zijn uitgebreide controles voor een regel. Waar de vereiste labels een controle zijn voor labels die gevuld
moeten zijn, zijn de condities iets meer te variëren qua checks. Je kan bijvoorbeeld specifieke waarden doorgeven waar aan
voldaan moet worden voor een label. Of juist het tegenovergestelde, het kan allemaal zelf samengesteld worden. Meer hierover
in het onderdeel 'Condities' (link).

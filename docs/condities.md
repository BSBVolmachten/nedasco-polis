# Condities

Een conditie combineert verschillende properties om zo checks uit te voeren op een dataset voor de regel waar de
conditie bij hoort. 

Condities kunnen samengesteld worden om een 'compleet' pakket te hebben aan mogelijkheden. Hiervoor zijn 3 mogelijkheden
geïntroduceerd:

- AND (1): alle condities moeten geldig zijn
- OR (0): een of meerdere van de condities hoeven maar geldig te zijn
- FALSE: omdraaien van een conditie resultaat

Dit willen we in een Array kunnen noteren, om de condities makkelijk te kunnen combineren. Dit werkt als volgt:

- Alle condities staan in een Array, en kunnen recursief in lijsten voor komen
- De default conditie setting is OR (0)
- De conditie setting moet als eerste in de lijst
- Een setting geld voor een groep condities in een lijst

Een voorbeeld van twee condities die allebei (1) geldig moeten zijn.

```json
{
  "condities": [
    1,
    {
      "labels": [
        "10033"
      ]
    },
    {
      "labels": [
        "10043"
      ]
    }
  ]
}
```

Een voorbeeld van een conditie waarbij 1 van de twee geldig moet zijn, of allebei.

```json
{
  "condities": [
    0,
    {
      "labels": [
        "10033"
      ]
    },
    {
      "labels": [
        "10043"
      ]
    }
  ]
}
```

Een voorbeeld van een conditie waarbij 1 van de twee geldig moet zijn, of allebei.

```json
{
  "condities": [
    {
      "labels": [
        "10033"
      ]
    },
    {
      "labels": [
        "10043"
      ]
    }
  ]
}
```

Hieronder staan verschillende combinaties die als voorbeeld dienen voor condities.

### 1 Label & 1 Waarde

```json
{
  "labels": [
    "10040"
  ],
  "waarden": [
    "100"
  ]
}
```

Deze conditie is geldig als label 10040 de waarde '100' heeft.

### 1 Label & Meerdere Waarden

```json
{
  "labels": [
    "10040"
  ],
  "waarden": [
    "100",
    "110"
  ]
}
```
Deze conditie is geldig als label 10040 de waarde '100' of '110' heeft.

### Meerdere Labels & 1 Waarde

```json
{
  "labels": [
    "10040",
    "10032"
  ],
  "waarden": [
    "100"
  ]
}
```
Deze conditie is geldig als label 10040 of label 10032 de waarde '100' heeft.

### Meerdere Labels & Meerde Waarden

```json
{
  "labels": [
    "10040",
    "10032"
  ],
  "waarden": [
    "100",
    "110"
  ]
}
```
Deze conditie is geldig als label 10040 of label 10032 de waarde '100' of '110' heeft.


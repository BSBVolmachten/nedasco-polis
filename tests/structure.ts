export const structure = {
    "String": {
        "_type": "value",
        "_accept": (value: any) => {
            return typeof value === 'string';
        }
    },
    "Setting": {
        "_type": "value",
        "_accept": (value: any) => {
            return (value === 0) || (value === 1);
        }
    },
    "omschrijving": {
        "_type": "String"
    },
    "inhoud": {
        "_type": "String"
    },
    "extraOmschrijving": {
        "_type": "String"
    },
    "type": {
        "_type": "String"
    },
    "vereiste_labels": {
        "_type": "Array",
        "_content": [
            "String"
        ]
    },
    "maatschappijen": {
        "_type": "Array",
        "_content": [
            "String"
        ]
    },
    "labels": {
        "_type": "Array",
        "_content": [
            "String"
        ]
    },
    "waarden": {
        "_type": "Array",
        "_content": [
            "String"
        ]
    },
    "conditie": {
        "_type": "Object",
        "_properties": {
            "labels": "labels",
            "waarden": "waarden"
        }
    },
    "condities": {
        "_type": "Array",
        "_content": [
            "Setting",
            "conditie",
            "condities"
        ]
    },
    "replace": {
        "_type": "Object",
        "_properties": {
            "condities": "labels",
            "omschrijving": "omschrijving",
            "inhoud": "inhoud",
            "extraOmschrijving": "extraOmschrijving",
            "type": "type"
        }
    }
}
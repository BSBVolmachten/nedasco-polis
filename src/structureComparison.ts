import {structure} from "../tests/structure";

export function structureComparison(structureToCheck: any, correspondingTypeStructure: any): boolean {

    let correspondingType = correspondingTypeStructure._type;

    if (correspondingType === 'Array') {
        if (Object.prototype.toString.call(structureToCheck) !== '[object Array]') return false;

        let correspondingContent = correspondingTypeStructure._content;
        let results: boolean[] = [];

        for (let i = 0; i < structureToCheck.length; i++) {
            let structureResults = [];

            for (let j = 0; j < correspondingContent.length; j++) {
                structureResults.push(structureComparison(structureToCheck[i], structure[correspondingContent[j]]));
            }

            results.push(structureResults.some(e => e === true));
        }

        for (let i = 0; i < results.length; i++) {
            if (results[i] === false) {
                console.error('structure', structureToCheck, 'is not valid, element', structureToCheck[i], 'does not match any of the content described:', correspondingContent);
                return false;
            }
        }

        return true;
    }

    if (correspondingType === 'Object') {
        if (Object.prototype.toString.call(structureToCheck) !== '[object Object]') return false;

        let properties = correspondingTypeStructure._properties;
        let keys = Object.keys(properties);
        let results = [];

        for (let i = 0; i < keys.length; i++) {
            results.push(structureComparison(structureToCheck[properties[keys[i]]], structure[properties[keys[i]]]));
        }

        for (let i = 0; i < results.length; i++) {
            if (results[i] === false) {
                console.error(`structure '${structureToCheck}' is not valid, property '${structureToCheck[properties[i]]}' dit not match it's type`)
                return false;
            }
        }

        return true;
    }

    if (correspondingType === 'value') {
        return correspondingTypeStructure._accept(structureToCheck);
    }

    return structureComparison(structureToCheck, structure[correspondingType]);
}

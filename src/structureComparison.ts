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

            if (!structureResults.some(e => e === true)) {
                console.error('none of the structures types:', correspondingContent, 'has been approved for the structure:', structureToCheck[i]);
                return false;
            }
        }

        for (let i = 0; i < results.length; i++) {
            if (results[i] === false) return false;
        }

        return true;
    }

    if (correspondingType === 'Object') {
        if (Object.prototype.toString.call(structureToCheck) !== '[object Object]') return false;

        let properties = correspondingTypeStructure._properties;
        let keys = Object.keys(properties);
        let results = [];

        for (let i = 0; i < keys.length; i++) {
            let result = structureComparison(structureToCheck[properties[keys[i]]], structure[properties[keys[i]]]);

            results.push(result);
        }

        for (let i = 0; i < results.length; i++) {
            if (results[i] === false) return false;
        }

        return true;
    }

    if (correspondingType === 'value') {
        return correspondingTypeStructure._accept(structureToCheck);
    }

    return structureComparison(structureToCheck, structure[correspondingType]);
}
import {structure} from "../tests/structure";

export function structureComparison(structureToCheck: any, correspondingTypeStructure: any): boolean {

    let correspondingType = correspondingTypeStructure._type;

    if (correspondingType === 'Array') {
        if (Object.prototype.toString.call(structureToCheck) !== '[object Array]') return false;

        let correspondingContent = correspondingTypeStructure._content;
        let results: boolean[] = [];
        let valid = true;

        for (let i = 0; i < structureToCheck.length; i++) {
            let structureResults = [];

            for (let j = 0; j < correspondingContent.length; j++) {
                let result = structureComparison(structureToCheck[i], structure[correspondingContent[j]]);

                structureResults.push(result);

                if (result === true) {
                    break;
                }
            }

            results.push(structureResults.some(e => e === true));
        }

        for (let i = 0; i < results.length; i++) {
            if (results[i] === false) {
                console.error('structure', structureToCheck, 'is not valid, element', structureToCheck[i], 'does not match any of the content described:', correspondingContent);
                valid = false;
            }
        }

        return valid;
    }

    if (correspondingType === 'Object') {
        if (Object.prototype.toString.call(structureToCheck) !== '[object Object]') return false;

        let properties = correspondingTypeStructure._properties;
        let keys = Object.keys(properties);
        let results = [];
        let valid = true;

        for (let i = 0; i < keys.length; i++) {
            let result = structureComparison(structureToCheck[properties[keys[i]]], structure[properties[keys[i]]]);

            results.push(result);
        }

        for (let i = 0; i < results.length; i++) {
            if (results[i] === false) {
                console.error(`structure '${structureToCheck}' is not valid, property '${structureToCheck[properties[i]]}' dit not match it's type`)
                valid = false;
            }
        }

        return valid;
    }

    if (correspondingType === 'value') {
        return correspondingTypeStructure._accept(structureToCheck);
    }

    return structureComparison(structureToCheck, structure[correspondingType]);
}

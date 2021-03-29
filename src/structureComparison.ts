import {structure} from "../tests/structure";

export function structureComparison(structureToCheck: any, correspondingTypeStructure: any): boolean {

    let correspondingType = correspondingTypeStructure._type;

    if (correspondingType === 'Array') {
        let correspondingContent = correspondingTypeStructure._content;
        let results: boolean[] = [];

        for (let i = 0; i < structureToCheck.length; i++) {
            let result;

            for (let j = 0; j < correspondingContent.length; j++) {
                result = structureComparison(structureToCheck[i], structure[correspondingContent[j]]);
            }

            if (result) {
                results.push(result);
            }
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
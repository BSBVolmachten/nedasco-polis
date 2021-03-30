import CustomMatcherResult = jest.CustomMatcherResult;
import {typeAndValue} from "../helpers/typeAndValue";

export function matchesCondities(condities: any[] | number | { [key: string]: any },
                                 locatieMelding: string): CustomMatcherResult {

  if (Object.prototype.toString.call(condities) === '[object Array]') {
    let conditielijst: any[] = <any[]>condities;

    if (conditielijst.length === 1 && (conditielijst[0] === 0 || conditielijst[0] === 1)) {
      return {
        pass: false,
        message: () => {
          return locatieMelding + 'een conditie met alleen een setting heeft geen nut, verwijder de conditie:' + typeAndValue(condities);
        }
      }
    }

    for (let i = 0; i < conditielijst.length; i++) {
      let onderdeelResultaat = matchesCondities(conditielijst[i], locatieMelding);

      if (!onderdeelResultaat.pass) {
        return onderdeelResultaat;
      }
    }

    return {
      pass: true,
      message: () => {
        return locatieMelding + 'condities zijn goedgekeurd';
      }
    }

  } else if (Object.prototype.toString.call(condities) === '[object Object]') {

    let conditieObject: { [key: string]: any } = <{ [key: string]: any }>condities;
    let keys = Object.keys(conditieObject);

    if (keys.length === 0) {
      return {
        pass: false,
        message: () => {
          return locatieMelding + 'een lege conditie heeft geen nut, verwijder de conditie: ' + typeAndValue(conditieObject);
        }
      }
    }

    if (conditieObject.hasOwnProperty('labels')) {
      if (Object.prototype.toString.call(conditieObject.labels) !== '[object Array]') {
        return {
          pass: false,
          message: () => {
            return locatieMelding + 'de labels zijn niet opgegeven als array: ' + typeAndValue(conditieObject.labels);
          }
        }
      }

      for (let i = 0; i < conditieObject.labels.length; i++) {
        if (typeof conditieObject.labels[i] !== 'string') {
          return {
            pass: false,
            message: () => {
              return locatieMelding + 'er kunnen alleen maar strings in een label zitten: ' + typeAndValue(conditieObject.labels[i])
            }
          }
        }
      }
    }

    if (conditieObject.hasOwnProperty('waarden')) {
      if (Object.prototype.toString.call(conditieObject.waarden) !== '[object Array]') {
        return {
          pass: false,
          message: () => {
            return locatieMelding + 'de waarden zijn niet opgegeven als array: ' + typeAndValue(conditieObject.waarden);
          }
        }
      }

      for (let i = 0; i < conditieObject.waarden.length; i++) {
        if (typeof conditieObject.waarden[i] !== 'string') {
          return {
            pass: false,
            message: () => {
              return locatieMelding + 'er kunnen alleen maar strings in een label zitten: ' + typeAndValue(conditieObject.waarden[i])
            }
          }
        }
      }
    }

    return {
      pass: true,
      message: () => {
        return locatieMelding + 'condities zijn goedgekeurd';
      }
    }
  } else if (typeof condities === 'number') {
    if (condities !== 1 && condities !== 0) {
      return {
        pass: false,
        message: () => {
          return locatieMelding + 'de setting van de conditie kan alleen 0 of 1 zijn: ' + typeAndValue(condities);
        }
      }
    }

    return {
      pass: true,
      message: () => {
        return locatieMelding + 'condities zijn goedgekeurd';
      }
    }
  }

  return {
    pass: false,
    message: () => {
      return locatieMelding + 'dit is geen geldig type voor condities: ' + typeAndValue(condities);
    }
  }
}

import CustomMatcherResult = jest.CustomMatcherResult;
import {typeAndValue} from "../helpers/typeAndValue";
import {matchesCondities} from "./matchesCondities";

export function toBeValidRegel(received: any, location: string): CustomMatcherResult {

  const locatieMelding = `fout in het bestand ${location}\nregel: ${JSON.stringify(received, null, 2)}\n`;

  if (Object.prototype.toString.call(received) !== '[object Object]') {
    return {
      pass: false,
      message: () => {
        return locatieMelding + 'dit is geen object: ' + typeof received;
      }
    }
  }

  if (received.hasOwnProperty('omschrijving')) {
    if (typeof received.omschrijving !== 'string') {
      return {
        pass: false,
        message: () => {
          return locatieMelding + 'omschrijving is geen string: ' + typeAndValue(received.omschrijving);
        }
      }
    }
  }

  if (received.hasOwnProperty('inhoud')) {
    if (typeof received.inhoud !== 'string') {
      return {
        pass: false,
        message: () => {
          return locatieMelding + 'inhoud is geen string: ' + typeAndValue(received.inhoud);
        }
      }
    }
  }

  if (received.hasOwnProperty('extraOmschrijving')) {
    if (typeof received.extraOmschrijving !== 'string') {
      return {
        pass: false,
        message: () => {
          return locatieMelding + 'extraOmschrijving is geen string: ' + typeAndValue(received.extraOmschrijving);
        }
      }
    }
  }

  if (received.hasOwnProperty('type')) {
    if (typeof received.type !== 'string') {
      return {
        pass: false,
        message: () => {
          return locatieMelding + 'type is geen string: ' + typeAndValue(received.type);
        }
      }
    }
  }

  if (received.hasOwnProperty('maatschappijen')) {
    if (Object.prototype.toString.call(received.maatschappijen) !== '[object Array]') {
      return {
        pass: false,
        message: () => {
          return locatieMelding + 'de maatschappijen zijn niet opgegeven als array: ' + typeAndValue(received.maatschappijen);
        }
      }
    }

    for (let i = 0; i < received.maatschappijen.length; i++) {
      let maatschappij = received.maatschappijen[i];

      if (typeof maatschappij !== 'string') {
        return {
          pass: false,
          message: () => {
            return locatieMelding + 'een van de opgegeven maatschappijen is geen string: ' + typeAndValue(received.maatschappijen[i]);
          }
        }
      }
    }
  }

  if (received.hasOwnProperty('vereiste_labels')) {
    if (Object.prototype.toString.call(received.vereiste_labels) !== '[object Array]') {
      return {
        pass: false,
        message: () => {
          return locatieMelding + 'de vereiste_labels zijn niet opgegeven als array: ' + typeAndValue(received.vereiste_labels);
        }
      }
    }

    for (let i = 0; i < received.vereiste_labels.length; i++) {
      let vereist_label = received.vereiste_labels[i];

      if (typeof vereist_label !== 'string') {
        return {
          pass: false,
          message: () => {
            return locatieMelding + 'een van de opgegeven vereiste_labels is geen string: ' + typeAndValue(received.vereiste_labels[i]);
          }
        }
      }
    }
  }

  if (received.hasOwnProperty('condities')) {
    let conditieResult = matchesCondities(received.condities, locatieMelding);

    if (!conditieResult.pass) {
      return conditieResult;
    }
  }

  return {
    pass: true,
    message: () => {
      return 'Het object ' + JSON.stringify(received) + ' op de locatie ' + location + ' zou geen valid regel moeten zijn ';
    }
  }
}

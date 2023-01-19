/**
 * use instead of any, we'll ix it later.
 *
 * @export
 * @typedef {}
 */
export type $TSfixMeAny = any

export type Programma = {
    id: number;
    afbeelding: string;
    datum: string;
    omschrijving: string;
    titel: string;
    zaal: {
        zaalNr: number
        soort: string;
        eersterangsAantal: number;
        tweederangsAantal: number;
        derderangsAantal: number;
    }
}
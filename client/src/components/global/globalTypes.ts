import type {
	userData 
} from '../../context/UserContext';

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
    zaalNr: string;
}

export type Reservering = {
    id: number;
    qr: string;
    betaald: boolean;
    aankoopDatum: string;
    stoelen: string;
    owner: userData;
    programmering: Programma;
}

export type Groep = {
    id: number;
    naam: string;
    omschrijving: string;
    afbeelding: string;
    websiteUrl: string;
    betrokkenen: userData[];
    programmeringen: Programma[];
}
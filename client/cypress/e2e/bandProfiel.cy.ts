import {
	gotoPage
} from './scripts';

describe('BandProfiel', () => {
	beforeEach(() => {
		gotoPage('band/3');
	});
	it('test BandProfiel loads correctly', () => {
		cy.get('h4').contains('Electric callboy');
		cy.get('p').contains('Sit velit do ex excepteur ullamco dolor consequat enim.');
		cy.get('a[href="https://www.electriccallboy.com/"]').contains('Website');
	});
	
	it('test if programs load', () => {
		cy.get('h6').contains('our house in the middle of a porn');
		cy.get('h6').contains('ghello');
	});

	it('test if leden load', () => {
        cy.get('button').contains('Leden').click();
		cy.get('h4').contains('lieve niebba');
		cy.get('h4').contains('jan kees');
		cy.get('h4').contains('pieter pan');
		cy.get('h4').contains('milf maniac');
		cy.get('h4').contains('aladin panstealer');
		cy.get('h4').contains('chadilicious marvelous');
	});
});

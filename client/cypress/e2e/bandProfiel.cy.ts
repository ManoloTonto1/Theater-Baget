import {
	gotoPage
} from './scripts';

describe('BandProfiel has', () => {
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

describe('BandProfiel doesnt have', () => {
	beforeEach(() => {
		gotoPage('band/4');
	});
	
	it('test if message is correctly shown with no shows', () => {
		cy.get('h4').contains('Bands shows:');
		cy.get('h5').contains('No current shows available.');
	});

	it('test if message is correctly shown with no leden', () => {
		cy.get('button').contains('Leden').click();
		cy.get('h4').contains('Leden:');
		cy.get('h5').contains('Band currently has no members.');
	});
});
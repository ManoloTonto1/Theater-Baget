import {
	gotoPage
} from './scripts';

describe('Admin', () => {
	beforeEach(() => {
		gotoPage('login');
		cy.get('input[type="email"]').click().type('chad@e.com');
		cy.get('input[type="password"]').click().type('password');
		cy.get('button[type="submit"]').click();
		cy.get('button').contains('My Account').click();
		cy.get('button').contains('To admin page').click();
	});
	it('test ProgrammaToevoegen loads correctly', () => {
		cy.get('h5').contains('Programma toevoegen');
	});
	it('test zaalToevoegen verbindt met api', () => {
		cy.get('input[name="titel"]').click().type('Monkeys on ice');
		cy.get('input[name="omschrijving"]').click().type('A very refreshing experience');
		cy.get('div[aria-labelledby="Zaal select"]').click();
		cy.get('li').contains('#1').click();
		cy.get('input[name="prijs"]').click().type('420');

		cy.intercept({
			url: '/api/programmeringen',
			method: 'POST'
		}).as('post');

		cy.get('button[type="submit"').should('be.enabled').click();
		cy.wait('@post').then(() => {			
			cy.get('h3').should('be.visible').contains('Toevoegen Gelukt');
		});
	});
});
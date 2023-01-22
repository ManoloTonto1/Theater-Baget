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
		cy.get('button').contains('Zaal toevoegen').click();
	});
	it('test zaalToevoegen loads correctly', () => {
		cy.get('h5').contains('Zaal toevoegen');
	});
	it('test zaalToevoegen verbindt met api', () => {
		cy.get('input[name="soort"]').click().type('theater');
		cy.get('input[name="eersterang"]').click().type('21');
		cy.get('input[name="tweederang"]').click().type('22');
		cy.get('input[name="derderang"]').click().type('23');

		cy.intercept({
			url: '/api/zalen',
			method: 'POST'
		}).as('post');

		cy.get('button[type="submit"').should('be.enabled').click();
	});
});
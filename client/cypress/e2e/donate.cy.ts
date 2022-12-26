import {
	gotoPage 
} from './scripts';

describe('Donate', () => {
	beforeEach(() => {
		gotoPage('donate');
	});
	it('donation with default comment', () => {
		cy.get('button').contains('Nog veel').click();
		cy.get('input[name="amount"]').click().type('1');
		cy.get('button').contains('next').should('not.be.disabled').click();
		cy.get('p').contains('Met ❤️');
		cy.get('button').contains('gereed').should('be.visible').click();
		cy.get('h3').contains('Donatie Gelukt');
	});
	it('donation with extra comment', () => {
		cy.get('button').contains('Nog veel').click();
		cy.get('input[name="amount"]').click().type('1');
		cy.get('input[name="comment"]').click().type('{selectAll} This is a test');
		cy.get('button').contains('next').should('not.be.disabled').click();
		cy.get('p').contains('This is a test');
		cy.get('button').contains('gereed').should('be.visible').click();
		cy.get('h3').contains('Donatie Gelukt');
	});
	it('donation with no comment', () => {
		cy.get('button').contains('Nog veel').click();
		cy.get('input[name="amount"]').click().type('1');
		cy.get('input[name="comment"]').click().type('{selectAll} ');
		cy.get('button').contains('next').should('be.disabled');
	});
	it('donation with no moeny', () => {
		cy.get('button').contains('Nog veel').click();
		cy.get('input[name="comment"]').click().type('{selectAll} ');
		cy.get('button').contains('next').should('be.disabled');
	});
	it('donation failed', () => {

		cy.get('button').contains('Nog veel').click();
		cy.get('input[name="amount"]').click().type('1');
		cy.get('input[name="comment"]').click().type('{selectAll} This is a test');
		cy.get('button').contains('next').should('not.be.disabled').click();
		cy.get('p').contains('This is a test');
		cy.intercept('https://ikdoneer.azurewebsites.net/api/donatie/', {
			times: 2
		}, {
			statusCode: 500 
		}).as('serverError');
		cy.get('button').contains('gereed').should('be.visible').click();
		cy.wait('@serverError');
		cy.get('h3').contains('Donatie niet gelukt');
	});
});
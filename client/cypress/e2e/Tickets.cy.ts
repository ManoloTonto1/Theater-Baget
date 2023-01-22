import {
	gotoPage 
} from './scripts';

describe('Donate', () => {
	beforeEach(() => {
		gotoPage('login');
		cy.get('input[type="email"]').click().type('chad@e.com');
		cy.get('input[type="password"]').click().type('password');
		cy.get('button[type="submit"]').click();

	});
	it('buy a ticket', () => {
		cy.get('p').contains('Jun 26, 2023');
		cy.get('p').contains('The immigration of Xiao').click();
        
		cy.get('h3').contains('The immigration of Xiao');
		cy.get('h4').contains('Beschrijving');
		cy.get('a').contains('Tickets Kopen').click();
        
		cy.get('div[aria-labelledby="Stoel selectie"]').click();
		cy.get('li').contains('A2').click();
		cy.get('.MuiBackdrop-root').click();
		cy.get('input[value=A2]');
		cy.get('button').contains('Volgende Stap').click();
		cy.get('label').contains('Rekening nummer');
		cy.get('input').type('6969');
		cy.get('button').contains('Volgende Stap').click();
		cy.get('p').contains('10.00');
		cy.get('button').contains('Gereed').click();
		cy.get('h3').contains('Betaling Gelukt');
		cy.get('div > svg[style="width: 100%;"]').contains('Betaling Gelukt');
	});
	it('ticket failed', () => {

		cy.get('p').contains('Jun 26, 2023');
		cy.get('p').contains('The immigration of Xiao').click();
        
		cy.get('h3').contains('The immigration of Xiao');
		cy.get('h4').contains('Beschrijving');
		cy.get('a').contains('Tickets Kopen').click();
        
		cy.get('div[aria-labelledby="Stoel selectie"]').click();
		cy.get('li').contains('1').click();
		cy.get('.MuiBackdrop-root').click();
		cy.get('button').contains('Volgende Stap').click();
		cy.get('label').contains('Rekening nummer');
		cy.get('input').type('6969');
		cy.get('button').contains('Volgende Stap').click();
		cy.get('p').contains('10.00');
		cy.intercept('https://fakepay.azurewebsites.net/', {
			times: 2
		}, {
			statusCode: 500 
		}).as('serverError');
		cy.get('button').contains('Gereed').should('be.visible').click();
		cy.wait('@serverError');
		cy.get('h3').contains('Betaling niet gelukt');
	});
});
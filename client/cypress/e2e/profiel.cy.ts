import {
	gotoPage
} from './scripts';

describe('Profiel', () => {
	beforeEach(() => {
		gotoPage('login');
		cy.get('input[type="email"]').click().type('jan@mail.com');
		cy.get('input[type="password"]').click().type('password');
		cy.get('button[type="submit"]').click();
		cy.get('button').contains('My Account').click();
	});
	it('test Profiel loads correctly', () => {
		cy.get('h4').contains('jan kees');
		cy.get('h6').contains('jan@mail.com');
		cy.get('p').contains('Volwassenen');
	});

	it('test Logout', () => {
		cy.get('button').contains('Log uit').click();
		cy.get('button').contains('Login');
	});
	it('test edit user', () => {
		// deze moet nog
		cy.get('button').contains('Settings').click();
	});
	it('test tickets', () => {
		cy.get('button').contains('Tickets').click();
		cy.get('h4').contains('Tickets:');
	});
	it('test my bands', () => {
		cy.get('button').contains('Bands').click();
		cy.get('h4').contains('Electric callboy');
	});

	it('test my shows', () => {
		cy.get('button').contains('Shows').click();
		cy.get('h6').contains('our house in the middle of a porn');
		cy.get('h6').contains('ghello');
        
	});
});
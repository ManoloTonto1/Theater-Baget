import {
	gotoPage
} from './scripts';

describe('SignIn', () => {
	beforeEach(() => {
		gotoPage('login');
	});

	it('kan een gebruiker laten inloggen', () => {

		cy.get('input[type="email"]').click().type('chad@e.com');
		cy.get('input[type="password"]').click().type('password');
		cy.get('button[type="submit"]').click();
	});
	
	it('kan een gebruiker een account laten aanmaken', () => {
		cy.get('button#simple-tab-1').click();
		cy.get('input[id="firstName"]').click().type('Mitchell');
		cy.get('input[id="lastName"]').click().type('Ekelschot');
		cy.get('input[id="email"]').click().type('test@cypress.com');
		cy.get('input[id="password"]').click().type('Azb373!');
		cy.get('input[id="confirmPassword"]').click().type('Azb373!');
		cy.get('input[id="acceptPolicy"]').click();
		cy.get('button[type="submit"]').click();

	});

	it('kan van sign in naar sign up wisselen', () => {
		cy.get('button#simple-tab-0').click();
		cy.get('button#simple-tab-1').click();
	});
	
	it('kan van sign up naar sign in wisselen', () => {
		cy.get('button#simple-tab-1').click();
		cy.get('button#simple-tab-0').click();
	});
});
import {
	gotoPage
} from './scripts';

describe('BetrokkeneToevoegen', () => {
    
	it('kan een betrokkene toevoegen', () => {
		gotoPage('login');
		cy.get('input[type="email"]').click().type('chad@e.com');
		cy.get('input[type="password"]').click().type('password');
		cy.get('button[type="submit"]').click();
		cy.get('button[id="myAccount"]').click();
		cy.get('button').contains('admin').click();
		cy.get('#vertical-tab-2').click();
		cy.get('input[type="text"]').click().type('Mitchell Ekelschot');
		cy.get('input[type="email"]').click().type('test@cypress.com');
		cy.get('.MuiSelect-select').click();
		cy.get('[data-value="1"]').click();
		cy.get('button[type="submit"]').click();
	});
    
	it('kan niet een betrokkene toevoegen als hij/zij al bestaat', () => {
	    gotoPage('login');
		cy.get('input[type="email"]').click().type('chad@e.com');
		cy.get('input[type="password"]').click().type('password');
		cy.get('button[type="submit"]').click();
		cy.get('button[id="myAccount"]').click();
		cy.get('button').contains('admin').click();
		cy.get('#vertical-tab-2').click();
		cy.get('input[type="text"]').click().type('Mitchell Ekelschot');
		cy.get('input[type="email"]').click().type('test@cypress.com');
		cy.get('.MuiSelect-select').click();
		cy.get('[data-value="1"]').click();
		cy.get('button[type="submit"]').click();

		// nogmaals het formulier verzenden
		cy.get('button[type="submit"]').click();
	});
});
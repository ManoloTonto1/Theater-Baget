import {
	gotoPage
} from './scripts';

describe('GebruikerInzien', () => {
    
	it('kan een gebruiker inzien', () => {
		gotoPage('login');
		cy.get('input[type="email"]').click().type('chad@e.com');
		cy.get('input[type="password"]').click().type('password');
		cy.get('button[type="submit"]').click();
		cy.get('button[id="myAccount"]').click();
		cy.get('button').contains('admin').click();
		cy.get('button').contains('inzien').click();
		cy.get('.MuiSelect-select').click();
		cy.get('.MuiList-root > [tabindex="0"]').click();
		cy.get('.MuiFormControl-root > .MuiButtonBase-root').click();
	});
});
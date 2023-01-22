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
		gotoPage('admin/0');
	});
	it('test ProgrammaToevoegen loads correctly', () => {
		cy.get('h5').contains('Programma toevoegen');
	});
});
import {
	gotoPage
} from './scripts';

describe('Admin', () => {
	beforeEach(() => {
		gotoPage('admin/1');
	});
	it('test zaalToevoegen loads correctly', () => {
		cy.get('h4').contains('Electric callboy');
		cy.get('p').contains('Sit velit do ex excepteur ullamco dolor consequat enim.');
		cy.get('a[href="https://www.electriccallboy.com/"]').contains('Website');
	});
});
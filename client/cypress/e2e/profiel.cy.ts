import {
	gotoPage
} from './scripts';

describe('Profiel has', () => {
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
	it('test tickets if user has tickets', () => {
		cy.get('button').contains('Tickets').click();
		cy.get('h4').contains('Tickets:');
		cy.get('h6').contains('good day');
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

describe('Profiel doesnt have', () => {
	beforeEach(() => {
		gotoPage('login');
		cy.get('input[type="email"]').click().type('mema@mail.com');
		cy.get('input[type="password"]').click().type('password');
		cy.get('button[type="submit"]').click();
		cy.get('button').contains('My Account').click();
	});

	it('test tickets if user doesnt has tickets', () => {
		cy.get('button').contains('Tickets').click();
		cy.get('h4').contains('Tickets:');
		cy.get('h5').contains('You currently dont have any reservations.');
		
	});

	it('test my bands doesnt have band', () => {
		cy.get('button').contains('Bands').click();
		cy.get('h4').contains('My bands:');
		cy.get('h5').contains('You are currently not part of a band.');
	});

	it('test my shows doesnt have shows', () => {
		cy.get('button').contains('Shows').click();
		cy.get('h4').contains('My shows:');
		cy.get('h5').contains('You currently dont have any jobs to work.');
        
	});
});
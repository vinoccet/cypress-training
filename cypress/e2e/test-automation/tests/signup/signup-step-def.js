import { Given,Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit the signup page', () => {
  cy.visit('/')
})

Then('I validate tile and logo text', () => {
  cy.title().should('eq', 'Automation Exercise');
  cy.get('a > img').should('be.visible');
})
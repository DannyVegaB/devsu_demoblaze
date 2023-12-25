/// <reference types="cypress" />

class LoginPage {

    enetURL() {
    
    cy.visit("https://www.demoblaze.com/");
    
    }
    
    enterUserNamePassword(username, password) {
    
    cy.contains("Log in").click();
    
    cy.get("#loginusername").clear();
    
    cy.get("#loginusername").type(username);
    
    cy.get("#loginpassword").clear();
    
    cy.get("#loginpassword").type(password);
    
    return this;
    
    }
    
    clickOnSignInButton() {
    
    return cy.contains("Log in").click();
    
    }
    
    verifyPageTitle() {
    
    return cy.title().should("eq", "My account — My Store");
    
    }
    
    validateErrorMessage(errorMessage) {
    
    return cy.contains(errorMessage);
    
    }
    
    }
    
    const login = new LoginPage();
    
    export default login;
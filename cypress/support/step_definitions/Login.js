/// <reference types="cypress" />
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";


const url = "https://www.demoblaze.com/";


Given('Usuario ingresa a demoblaze', () => {
    cy.visit(url);
})

When('el usuario selecciona el primer producto {}', (producto1) => {
    cy.contains(producto1).click();
    cy.wait(2000);
    //cy.get('[onclick="addToCart(1)"]').click();
    cy.contains("Add to cart").click();
    cy.wait(2000);
    cy.on('window:alert',(txt)=>{
        //Assertion
        expect(txt).to.contains('Product added');
        })
    
})

When('el usuario vuelve al home', () => {
    cy.contains("Home").click();
    
})

When('el usuario selecciona el segundo producto {}', (producto2) => {
    cy.contains(producto2).click();
    cy.wait(2000);
    //cy.get('[onclick="addToCart(4)"]').click();
    cy.contains("Add to cart").click();
    cy.wait(2000);
    cy.on('window:alert',(txt)=>{
        //Assertion
        expect(txt).to.contains('Product added');
        })
    
})

When('el usuario ingresa al carrito', () => {
    cy.get('#cartur').click();
    cy.wait(2000);
})

When('el usuario selecciona place order', () => {
    cy.get('[data-target="#orderModal"]').click();
    cy.wait(2000);
})

When('el usuario rellena el formulario', () => {
    cy.get("#name").clear();
    cy.get("#name").type("Danny");

    cy.get("#country").clear();
    cy.get("#country").type("Perú");

    cy.get("#city").clear();
    cy.get("#city").type("Lima");

    cy.get("#card").clear();
    cy.get("#card").type("4050 1234 1234 1234");

    cy.get("#month").clear();
    cy.get("#month").type("01");

    cy.get("#year").clear();
    cy.get("#year").type("2028");
})

When('el usuario selecciona purcharse', () => {
    cy.get('[onclick="purchaseOrder()"]').click();
    cy.wait(2000);
    
})

Then('el usuario visualiza el mensaje de confirmacion {}', (Mensaje) => {
    cy.contains("Thank you for your purchase!").should('have.text', Mensaje);

    cy.get('[class="confirm btn btn-lg btn-primary"]').click();
    cy.wait(2000);

})
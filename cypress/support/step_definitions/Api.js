/// <reference types="cypress" />
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";

Given('Yo ingreso en el api un usuario {} y clave {} validos', (user, clave) => {
    cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/login', // baseUrl is prepend to URL
        //form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          username: user,
          password: clave,
        },
      })
      .should((resp) => {
        // redirect status code is 302
        expect(resp.status).to.eq(200)
        expect(resp.body.Auth_token).to.not.be.null
      })
      

})


Given('Yo ingreso en el api un usuario {} y clave {} invalida', (user, clave) => {
    cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/login', // baseUrl is prepend to URL
        //form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          username: user,
          password: clave,
        },
      })
      .should((resp) => {
        // redirect status code is 302
        expect(resp.status).to.eq(200)
        expect(resp.body.errorMessage).to.eq("User does not exist.")
      })
      

})

Given('Yo ingreso en el api un usuario {} y clave {} nuevo', (user, clave) => {
    
    let randomNumber = Math.floor(Math.random() * (10000 - 1000)) + 1000;
    let newuser=user+randomNumber

    cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/signup', // baseUrl is prepend to URL
        //form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          username: newuser,
          password: clave,
        },
      })
      .should((resp) => {
        expect(resp.status).to.eq(200)
      })
})

Given('Yo ingreso en el api un usuario {} y clave {} existente', (user, clave) => {
    
    cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/signup', // baseUrl is prepend to URL
        //form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          username: user,
          password: clave,
        },
      })
      .should((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body.errorMessage).to.eq("This user already exist.")
      })
})
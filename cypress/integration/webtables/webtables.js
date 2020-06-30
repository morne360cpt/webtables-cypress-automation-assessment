/// <reference types="Cypress" />

describe('webtables way to automate adding users.', function() {

    beforeEach(() => {
        cy.visit('/webtables')
        cy.fixture('userData').then(function(data) {
            this.data=data  
        })
    })
    
    it('validate you are on the user list table.', function() {
        
        cy
            .url()
            .should('include', '/webtables/') 
        cy
            .url()
            .should('eq', 'http://www.way2automation.com/angularjs-protractor/webtables/')
        cy
            .get('table')
            .should('be.visible')  
    })

    it('add user one with the following details.', function(randomDigitsUserOne=Math.floor(Math.random() * 1000000000000)) {
        
        cy
            .contains(' Add User')
            .should('be.visible')
            .and('have.class', 'btn-link')
            .click()

        cy  
            .get('input[name="FirstName"]')
            .should('be.empty')
            .type(this.data.userOneFirstName)

        cy
            .get('input[name="LastName"]')
            .should('be.empty')
            .type(this.data.userOneLastName)

        cy
            .get('input[name="UserName"]')
            .should('be.empty')
            .type(this.data.userOneUserName + randomDigitsUserOne)

        cy
            .get('input[name="Password"]')
            .should('be.empty')
            .type(this.data.userOnePassword)

        cy
            .get('[type="radio"]')
            .should('have.value', '15')
            .check('15')

        cy
            .get('select')
            .select(this.data.userOneRole)
            .should('have.value', '2')

        cy
            .get('input[name="Email"]')
            .should('be.empty')
            .type(this.data.userOneEmail)
        cy
            .get('input[name="Mobilephone"]')
            .should('be.empty')
            .type(this.data.userOneMobilePhone)

        cy
            .get('.btn-success')
            .should('be.visible')
            .and('have.text', 'Save')
            .click()

        cy
            .get('tr')
            .contains(this.data.userOneUserName + randomDigitsUserOne)
    })

    it('add user two with the following details.', function(randomDigitsUserTwo =Math.floor(Math.random() * 1000000000000)) {
        
        cy
            .contains(' Add User')
            .should('be.visible')
            .and('have.class', 'btn-link')
            .click()

        cy
            .get('input[name="FirstName"]')
            .should('be.empty')
            .type(this.data.userTwoFirstName)

        cy
            .get('input[name="LastName"]')
            .should('be.empty')
            .type(this.data.userTwoLastName)

        cy
            .get('input[name="UserName"]')
            .should('be.empty')
            .type(this.data.userTwoUserName + randomDigitsUserTwo)

        cy
            .get('input[name="Password"]')
            .should('be.empty')
            .type(this.data.userTwoPassword)

        cy
            .get('[type="radio"]')
            .check('16')

        cy
            .get('select')
            .select(this.data.userTwoRole)
            .should('have.value', '1')

        cy
            .get('input[name="Email"]')
            .should('be.empty')
            .type(this.data.userTwoEmail)

        cy
            .get('input[name="Mobilephone"]')
            .should('be.empty')
            .type(this.data.userTwoMobilePhone)
        
        cy
            .get('.btn-success')
            .should('be.visible')
            .and('have.text', 'Save')
            .click()
            
        cy
            .get('tr')
            .contains(this.data.userTwoUserName + randomDigitsUserTwo)    
    })
})
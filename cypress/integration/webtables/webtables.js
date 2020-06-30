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

    it('add user one with the following details.', function() {
        
        function firstSetOfRandomDigits(len){
            let numberOfDigits='';
           for(let digits=0;digits<len;digits++){
            numberOfDigits+=Math.floor(Math.random() * 10)
           };
           return numberOfDigits;
        }

        let randomNumForUserOne = firstSetOfRandomDigits(12)
        let resultForUserOne = randomNumForUserOne.toString()
        
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
            .type(this.data.userOneUserName + resultForUserOne)

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
            .contains(this.data.userOneUserName + resultForUserOne)
    })

    it('add user two with the following details.', function() {

        function secondSetOfRandomDigits(len){
            let numberOfDigits='';
           for(let digits=0;digits<len;digits++){
            numberOfDigits+=Math.floor(Math.random() * 10)
           };
           return numberOfDigits;
        }

        let randomNumForUserTwo = secondSetOfRandomDigits(12)
        let resultForUserTwo = randomNumForUserTwo.toString()
        
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
            .type(this.data.userTwoUserName + resultForUserTwo)

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
            .contains(this.data.userTwoUserName + resultForUserTwo)    
    })
})
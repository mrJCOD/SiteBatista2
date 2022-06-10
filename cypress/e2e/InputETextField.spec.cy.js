describe('Testando Input e TextField', () => {

    it('Testando Inputs e TextField', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield');

        cy.get('h5')
            .should('have.text', 'Inputs, TextField e TextArea')

        cy.get('#first_name').invoke('attr', 'placeholder').should('contain', 'Placeholder')

        cy.get('body > div.row > div.col.s9 > div:nth-child(2) > form > div:nth-child(3) > div:nth-child(1) > label')
            .should('have.text', 'First Name')

        cy.get('body > div.row > div.col.s9 > div:nth-child(2) > form > div:nth-child(3) > div:nth-child(2) > label')
            .should('have.text', 'Last Name')

        cy.get('body > div.row > div.col.s9 > div:nth-child(2) > form > div:nth-child(4) > div > label')
            .should('have.text', 'Password')

        cy.get('body > div.row > div.col.s9 > div:nth-child(2) > form > div:nth-child(5) > div > label')
            .should('have.text', 'Email')

        cy.get('body > div.row > div.col.s9 > div:nth-child(2) > form > div:nth-child(6) > div > label')
            .should('have.text', 'Textarea')



        cy.get('#first_name').type('Josivaldo')
        cy.get('#last_name').type('Silva')
        cy.get('#password').type('teste@123')
        cy.get('#email').type('teste@gmail.com')
        cy.get('#textarea1').type('Estou Aprendendo Cypress')

        cy.get('#first_name')
            .should('have.value', 'Josivaldo')

        cy.get('#last_name')
            .should('have.value', 'Silva')

        cy.get('#password')
            .should('have.value', 'teste@123')

        cy.get('#email')
            .should('have.value', 'teste@gmail.com')

        cy.get('#textarea1')
            .should('have.value', 'Estou Aprendendo Cypress')

    });
});
describe('Testando CheckBox', () => {
    it('Validando CheckBox', () => {

        cy.visit('https://sejaumfranqueado.vaivoando.com.br/')
        cy.get(':nth-child(2) > label > input').click()
        cy.get(':nth-child(2) > label > input').should('be.checked')

        cy.get('.wpcf7-list-item > .lgpd').click().should('be.checked')
        cy.get('.first > label > input').should('not.be.checked')


    })
})
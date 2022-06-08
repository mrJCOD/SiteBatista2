describe('empty spec', () => {
    it('passes', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')

        cy.get('.col > .blue').click()
        cy.get('#user_profile').clear()
        cy.get('#user_profile').type('Analista de Testes Senior')
        cy.get('#user_profile').should('have.value', 'Analista de Testes Senior')
        cy.get('.actions').click()

        cy.url().should('be.equal', 'https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('#notice').should('have.text', 'Seu Usuário foi Atualizado!')

    })
})
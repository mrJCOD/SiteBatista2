describe('empty spec', () => {
    it('passes', () => {
        cy.visit('https://www.petshop.com.br/loja/cadastro_layout.php?loja=496822')
        cy.get('#adicional_0').select('Cachorro').should('have.value', '1')

    })
})
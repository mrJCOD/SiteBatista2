describe('Testando Botoes', () => {

    it('Testando Visibilidade dos botoes', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes')
        cy.get('.row > :nth-child(1) > h5').should('have.text', 'Botões')
        cy.get(':nth-child(2) > h5').should('have.text', 'Mensagens de Sucesso!')
        cy.get('h4.bold').should('have.text', 'Lista de Funcionalidades')
        cy.get('#teste').click()
        cy.get('#div1 > h5').should('have.text', 'Você Clicou no Botão!')


    });
});
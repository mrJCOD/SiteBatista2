describe('Testando Links', () => {
    it('Testando Link Sucesso', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/links')
        cy.get(':nth-child(3) > :nth-child(1) > a').should('have.text', 'Ok 200 - Sucess')
        cy.get(':nth-child(3) > :nth-child(1) > a').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/buscaelementos/success')
        cy.get('.red-text').should('have.text', 'Success!!')

    });

    it('Testando Link Bad Request', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/links')
        cy.get(':nth-child(4) > :nth-child(1) > a').should('have.text', 'Erro 400 - Bad Request')
        cy.get(':nth-child(4) > :nth-child(1) > a').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/buscaelementos/badrequest')
        cy.get('.red-text').should('have.text', 'Bad Request!!')



    });

    it('Testando Link Page Not Found', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/links');
        cy.get(':nth-child(3) > :nth-child(2) > a').should('have.text', 'Erro 404 - Page not found')
        cy.get(':nth-child(3) > :nth-child(2) > a').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/buscaelementos/notfound')
        cy.get('.red-text').should('have.text', 'Page Not Found!!')

    });

    it('Testando Link Internal Server Error', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/links')
        cy.get(':nth-child(4) > :nth-child(2) > a').should('have.text', 'Erro 500 - Internal Server Error')
        cy.get(':nth-child(4) > :nth-child(2) > a').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/buscaelementos/internalservererror')
        cy.get('.red-text').should('have.text', 'Internal Server Error!!')

    });

    it('Testando Botao Voltar', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/links')
        cy.get('.btn').should('have.text', 'Voltar')
        cy.get('.btn').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/treinamento/home')

    });
});
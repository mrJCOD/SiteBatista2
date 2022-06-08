describe('empty spec', () => {


    it('passes', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/new')
        cy.get('#user_name').type('Josivaldo')
        cy.get('#user_name').should('have.value', 'Josivaldo')

        cy.get('#user_lastname').type('Silva')
        cy.get('#user_lastname').should('have.value', 'Silva')

        cy.get('#user_email').type('teste@gmail.com')
        cy.get('#user_email').should('have.value', 'teste@gmail.com')

        cy.get('#user_address').type('Rua 1')
        cy.get('#user_address').should('have.value', 'Rua 1')

        cy.get('#user_university').type('DESCOMPLICA')
        cy.get('#user_university').should('have.value', 'DESCOMPLICA')

        cy.get('#user_profile').type('Analista')
        cy.get('#user_profile').should('have.value', 'Analista')

        cy.get('#user_gender').type('Masculino')
        cy.get('#user_gender').should('have.value', 'Masculino')

        cy.get('#user_age').type('26')
        cy.get('#user_age').should('have.value', '26')

        cy.get('.tamanhodiv2 > .center').should('have.text', 'Novo Usuário!!')

        cy.get('#new_user > div:nth-child(3) > div:nth-child(1) > div > label').should('have.text', 'Nome *')
        cy.get('#new_user > div:nth-child(3) > div:nth-child(2) > div > label').should('have.text', 'Último nome *')
        cy.get('#new_user > div:nth-child(4) > div:nth-child(1) > div > label').should('have.text', 'Email *')
        cy.get('#new_user > div:nth-child(4) > div:nth-child(2) > div > label').should('have.text', 'Endereço')
        cy.get('#new_user > div:nth-child(5) > div:nth-child(1) > div > label').should('have.text', 'Universidade')
        cy.get('#new_user > div:nth-child(5) > div:nth-child(2) > div > label').should('have.text', 'Profissão')
        cy.get('#new_user > div:nth-child(6) > div:nth-child(1) > div > label').should('have.text', 'Gênero')
        cy.get('#new_user > div:nth-child(6) > div:nth-child(2) > div > label').should('have.text', 'Idade')
        cy.get('.actions > input').should('have.value', 'Criar')
        cy.get('.waves-light').should('have.text', 'Voltar')








    })


})
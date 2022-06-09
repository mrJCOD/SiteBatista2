describe('Edicao de Usuario', () => {
    it('Editando Usuario', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')

        cy.get('.col > .blue').click()
        cy.get('#user_profile').clear()
        cy.get('#user_profile').type('Analista de Testes Senior')
        cy.get('#user_profile').should('have.value', 'Analista de Testes Senior')
        cy.get('.actions').click()

        cy.url().should('be.equal', 'https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('#notice').should('have.text', 'Seu Usuário foi Atualizado!')

    })

    it('Validando nome', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('.s9 > :nth-child(3) > .col > :nth-child(1)').should('have.text', '\n          Nome:\n          Fulano\n        ')



    });

    it('Validando Último Nome', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('.s9 > :nth-child(3) > .col > :nth-child(2)').should('have.text', '\n          Último Nome:\n          de Tal\n        ')

    });

    it('Validando email', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('.s9 > :nth-child(3) > .col > :nth-child(3)').should('have.text', '\n          Email:\n          fulano@gmail.com\n        ')
    });

    it('Validando Universidade', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('.col > :nth-child(4)').should('have.text', '\n          Universidade:\n          E2E Treinamentos\n        ')

    });

    it('Validando Genero', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('.col > :nth-child(5)').should('have.text', '\n          Gênero:\n          Masculino\n        ')

    });

    it('Validando Profissão', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('.col > :nth-child(6)').should('have.text', '\n          Profissão:\n          Analista de Testes Senior\n        ')

    });

    it('Validando Idade', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('.col > :nth-child(7)').should('have.text', '\n          Idade:\n          21\n        ')

    });

    it('Validando Address', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('.col > :nth-child(8)').should('have.text', '\n          Address:\n          Rua Alphaville\n        ')
    });



    it('Testando botao voltar', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users/3098')
        cy.get('.red').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/users')

    });


})
describe('Lista de Usuarios', () => {

    it('Validando texto lista de usuarios', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users');

        cy.get('.tamanhodiv2 > .center').should('have.text', 'Lista de Usuários!!')

    });

    it('Validando titulo da pagina', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users');
        cy.title().should('eq', 'Automação com Batista')

    });

    it('Validando nome das colunas', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users');
        cy.get('thead > tr > :nth-child(1)').should('have.text', 'Nome')
        cy.get('thead > tr > :nth-child(2)').should('have.text', 'Último Nome')
        cy.get('thead > tr > :nth-child(3)').should('have.text', 'Email')
        cy.get('thead > tr > :nth-child(4)').should('have.text', 'Universidade')
        cy.get('thead > tr > :nth-child(5)').should('have.text', 'Sexo')
        cy.get('thead > tr > :nth-child(6)').should('have.text', 'Profissão')
        cy.get('thead > tr > :nth-child(7)').should('have.text', 'Idade')
        cy.get('thead > tr > :nth-child(8)').should('have.text', 'Endereço')
        cy.get('[colspan="3"]').should('have.text', 'Ações')

    });

    it.only('Validando icone de visualizar usuario', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users');
        cy.get(':nth-child(1) > :nth-child(9) > .material-icons').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/users/6048')

    });

    it('Validando icone de editar usuario', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users')
        cy.get(':nth-child(1) > :nth-child(10) > .material-icons').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/users/6048/edit')

    });

    it('Validando icone deletar usuario', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users')
        cy.get(':nth-child(1) > :nth-child(11) > .material-icons').click()
        cy.on("window:confirm", (t) => {
            expect(t).to.equal('Voce está certo disso?');
        });
        cy.get('#notice').should('have.text', 'Seu Usuário foi removido com sucesso!')


    });

    it('Validando AlertJS', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users')
        cy.get(':nth-child(1) > :nth-child(11) > .material-icons').click()
        cy.on("window:confirm", (t) => {
            expect(t).to.equal('Voce está certo disso?');
        });


    });

    it('Validar botao Proximo', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users')
        cy.get('.next > a').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/users?page=2')

    });

    it('Validando Botao anterior', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users?page=2');
        cy.get('.prev > a').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/users')


    });

    it('Validando botao primeiro', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users?page=2');
        cy.get('.first > a').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/users')

    });

    it('Validando botao ultimo', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users');
        cy.get('.last > a').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/users?page=590')

    });

    it('validando pagina 5 e 9', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users');
        cy.get('.pagination > :nth-child(5) > a').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/users?page=5')
        cy.get('.pagination > :nth-child(11) > a').click()
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/users?page=9')



    });


});
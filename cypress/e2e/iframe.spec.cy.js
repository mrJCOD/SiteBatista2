import 'cypress-iframe'
describe('Validando Iframe', () => {

    it('Interagindo com iframe', () => {


        cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/iframe');
        cy.frameLoaded('#id_do_iframe')
        cy.iframe('#id_do_iframe').find('#first_name').type('Mauro')
        cy.iframe('#id_do_iframe').find('#first_name').should('have.value', 'Mauro')
    });
});
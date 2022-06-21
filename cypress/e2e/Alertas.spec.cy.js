describe('Validando Alertas', () => {

    it('Interagir com alerta Simples', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/alert')

        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy
            .get('ul > :nth-child(1) > .btn').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Eu sou um alerta JS!')
            })
        cy.get('#result').should('have.text', 'Você clicou no alerta com sucesso!!')
    })

    it('Interagir com alerta Simples 2', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/alert')
        cy.get('ul > :nth-child(1) > .btn').click()
        cy.on('window:alert', (esperado) => {

            expect(esperado).to.equal('Eu sou um alerta JS!')
        })
        cy.get('#result').should('have.text', 'Você clicou no alerta com sucesso!!')

    })

    it('Interagir com alerta Confirm', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/alert')

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy
            .get(':nth-child(4) > .btn').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Eu sou uma confirmação JS!')

            })

    })

    it('Interagir com alerta Confirm 2', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/alert')
        cy.get(':nth-child(4) > .btn').click()
        cy.on("window:confirm", (esperado) => { //window confirm para confirmar, cancel para cancelar
            //verifica texto do pop-up
            expect(esperado).to.equal("Eu sou uma confirmação JS!")
        })

        cy.get('#result').should('have.text', 'Você clicou: Ok')

    })

    it('Interagir com alerta mensagem', () => {

        //Eu sou um  prompt JS!
        cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/alert')
        cy.window().then(function(escrever) {
            cy.stub(escrever, "prompt").returns("Escrevendo no Alerta");
        });
        cy.get(':nth-child(7) > .btn').click()
        cy.get('#result').contains('Escrevendo no Alerta')


    });


});
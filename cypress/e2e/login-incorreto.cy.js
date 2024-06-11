describe('Página de login', () => {

    beforeEach(() =>{
        cy.visit('http://localhost:4200')

        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 400
        }).as('stubPost')
      
      })

    it('Verificar mensagem de campos obrigatórios', () => {

    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');

    })

    it('Deve falahr mesmo que os campos estejam corretos', () => {
        cy.login('jonasc', 'jonas123');
        cy.wait('@stubPost')

    })
    
})
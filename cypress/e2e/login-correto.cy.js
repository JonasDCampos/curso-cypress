describe('Página de login', () => {

  beforeEach(() =>{
  cy.visit('http://localhost:4200')

})

  it('Preencher os campos do login corretamente para realizar login', () =>{
    cy.login('jonasc', 'jonas123');
  
  })
})
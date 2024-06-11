Cypress.Commands.add('login', (username, senha) => {
    cy.get('[data-test="loginUserName"]').type(username);
    cy.get('[data-test="loginPassword"]'). type(senha);
    cy.contains('button', 'login').click();
})

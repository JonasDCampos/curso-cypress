const el = require('./elements').ELEMENTS

class Cadastro{
    acessarPaginaDeCadastro(){
        cy.visit('http://localhost:4200/');
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario(){
        cy.get('[data-test="email"]').type('jonas@email.com.br');
        cy.get('input[data-test="fullName"]').type('Jonas Campos');
        cy.get('input[data-test="registerUserName"]').type('jonasc');
        cy.get('input[data-test="registerPassword"]').type('jonas123');
    }

    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click();
    }
}

export default new Cadastro();
describe('Routing', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('.chat-list__header', 'Сообщения');
  });

  it('Shows spinner on change chat', () => {
    cy.visit('/');
    cy.get('.loadable-content__spinner').should('not.exist');
    cy.get('.chat-list-item:nth-child(2)').click();
    cy.get('.loadable-content__spinner').should('exist');
  });

  it('Opens second dialog by permalink', () => {
    cy.visit('/2');
    cy.contains('.messages__conversation', 'Помогите мне настроить домен!');
  });
});

describe('Send form', () => {
  beforeEach(() => {
    cy.visit('/1');
    cy.get('.input-box__input').type('test');
  });

  it('Disable send form after sending message', () => {
    cy.get('.input-box__send').click();
    cy.get('.input-box__send').should('be.disabled');
  });

  it('Shows spinner on posting message', () => {
    cy.get('.loadable-content__spinner').should('not.exist');
    cy.get('.input-box__send').click();
    cy.get('.loadable-content__spinner').should('exist');
  });

  it('Adds new message', () => {
    cy.get('.input-box__send').click();
    cy.get('.conversation__messages').contains('test');
  });
});

describe('To Verify Joget Cloud Page', () => {
  beforeEach(() => {
    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');
  });

  it('Load Joget page successfully', () => {
    
    cy.url().should('include', '/appcenter/v/_/home');

    cy.get('#header-link').should('be.visible');

    cy.get('.filterinput').type('Asset').should('be.visible');
    cy.get('.filterinput').clear();
    cy.reload();

    cy.get('.user-link > .btn').click();
    cy.url().should('eq','https://qainterview.on.joget.cloud/jw/web/login');

    cy.get(':nth-child(1) > .btn > .fa').should('be.visible').click();

    cy.get(':nth-child(13) > .app-link > .userview-icon').should('be.visible').scrollIntoView();

  });
});
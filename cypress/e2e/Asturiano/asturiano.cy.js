describe('Pruebas de Cypress', () => {

  it('Prueba de Url', () => {
    cy.visit('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/web_asturiano_sv/');
  });

  it('Prueba de enlaces', () => {
    cy.visit('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/web_asturiano_sv/');
    cy.get('a').contains('Políticas de privacidad').click();
    cy.get('a').contains('Políticas de cookies').click();
    cy.get('a').contains('Términos y condiciones').click();
  });

  it('Verificar enlaces dentro del header "Alternar navegación Menú"', () => {
    cy.visit('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/web_asturiano_sv');/*  */
    cy.contains('Alternar navegación Menú').within(() => {
    cy.contains('Gusto a tiempo').should('be.visible');
    cy.get('#ui-id-4 > .mm-subcategory-title').should('be.visible');
    });
  });

  it('Prueba de contacto', () => {
    cy.visit('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/contacto');
    cy.get('.asturiano-contact.contact > #contact-form > .fieldset > .name > .control > #name').type('Nicolas');
    cy.get('.asturiano-contact.contact > #contact-form > .fieldset > .lastname > .control > #lastname').type('Dondo');
    cy.get('.asturiano-contact.contact > #contact-form > .fieldset > .email > .control > #email').type('nicolas.dondo@balloon-group.com');
    cy.get('.asturiano-contact.contact > #contact-form > .fieldset > .telephone > .control > #telephone').type('Este campo solo acepta numero de telefono');
    cy.get('.asturiano-contact.contact > #contact-form > .fieldset > .comment > .control > #comment').type('Buenos dias, mi nombre es Nicolas, este es un mensaje de prueba para ver como se puede aplicar Cypress a la automatización de algunos sectores de la página de Asturiano');
  });

});

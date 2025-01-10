
describe('First demo test', ()=> {
    it('Nagivate page content', ()=> {
        cy.visit('/')
        cy.contains('Find a ride now')

        cy.get('[name="pickup"]').type('University of Port Harcourt')
        cy.get('[name="location"]').type('Port Harcourt Nigeria')
        cy.get('#findDriver').should('contain', ' Find Driver').click()
    })
})
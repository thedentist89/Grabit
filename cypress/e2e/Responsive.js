/* eslint-disable no-undef */
describe('Responsive', () => {
  it('it views well in several view ports', () => {
    cy.visit('/')
      .viewport('iphone-6')
      .viewport('ipad-mini')
      .viewport('iphone-x')
      .findByText(/^Sign In$/)
      .click()
      .findByText(/Continue with facebook/i)
      .click()
      .viewport('iphone-6')
      .viewport('ipad-mini')
      .viewport('iphone-x')
  })
})

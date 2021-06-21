/// <reference types="cypress" />

beforeEach(() => {

  cy.request({
    method: 'POST',
    url: '/api/reset'
  })
  
})

it('Sending requests', () => {

  cy
    .visit('/')


  // useful for setting the application in a specific state, API calls and etc
  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'board created by .request() command'
      }
    })

});
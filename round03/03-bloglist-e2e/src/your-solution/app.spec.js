
// *** ENTER COMMIT SHA OF YOUR REPO IN HERE ***
const commitSHA = '-commit-sha-in-here-'

// *** DO NOT REMOVE OR CHANGE THIS LINE ***
describe(`\nEND TO END TESTS: ${Cypress.env('SOLUTION') || 'your-solution'} [ ${commitSHA} ]\n`, function () {

  beforeEach(function () {

    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.request('POST', 'http://localhost:3001/api/login', {
      username: 'mluukkai', password: 'salainen'
    }).then(response => {
      localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))
      cy.visit('http://localhost:3000')
    })
    cy.visit('http://localhost:3000')
  })

  it('login form is displayed by default', function () {
    cy.contains('login').click()
  })

  describe('Login', function () {

    it('succeeds with correct credentials', function () {
      cy.contains('login').click()
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('salainen')
      cy.get('#login-button').click()

      cy.contains('Matti Luukkainen logged in')
    })

    it('fails with wrong credentials', function () {
      cy.contains('login').click()
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('wrong')
      cy.get('#login-button').click()

      cy.contains('wrong credentials')
    })

  })

  describe('When logged in', function () {
    beforeEach(function () {
      cy.contains('login').click()
      cy.get('input:first').type('mluukkai')
      cy.get('input:last').type('salainen')
      cy.get('#login-button').click()
    })

    it('A blog can be created', function () {
      cy.contains('create new').click()
      cy.get('input:first').type('Title')
      cy.get('input:last').type('Author')
      cy.contains('save').click()
      cy.contains('Title')
      cy.contains('Author')
    })
  })

})

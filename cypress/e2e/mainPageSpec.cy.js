import homePage from "../../pages/homePage"

describe('Testing Google Website', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('Should route to Google Landing Page', () => {
    homePage.verifyLandingPage();
  })

  it('Should search for cypress.io', () => {
    homePage.searchPageFor("cypress.io")
  })

  it('Should search for selenium', () => {
    homePage.searchPageFor("selenium")
  })

  it('Should search for github', () => {
    homePage.searchPageFor("github")
  })
})
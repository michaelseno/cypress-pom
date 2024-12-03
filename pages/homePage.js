class homePage {
    elements = {
        homePageHeader : () => cy.get("img[class='lnXdpd']"),
        pageTextArea : () => cy.get("#APjFqb"),
        searchButton : () => cy.get("input[class='gNO89b']"),
        resultSite : (site) => cy.get("cite[role='text']")
    }

    verifyLandingPage() {
        this.elements.homePageHeader().should('exist');
        this.elements.pageTextArea().should('exist');
        this.elements.searchButton().should('exist');
    }

    searchPageFor(strInput) {
        this.elements.pageTextArea().type(strInput).type('{enter}')
        this.elements.resultSite().contains(strInput)
    }
}
module.exports = new homePage()
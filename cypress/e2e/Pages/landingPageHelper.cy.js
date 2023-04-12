const header = "h1:contains('Calculate holiday entitlement')"
const startNow = ".govuk-button--start"

export default class landingPage{
    static Verify_HomePage()
    {
        cy.get(header).should('be.visible')
    }

    static StartNow()
    {
        cy.get(startNow).click()
    }
}
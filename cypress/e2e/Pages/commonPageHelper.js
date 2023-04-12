const acceptCookies = "[data-track-action='Cookie banner accepted']"
const hideCookiesBanner = "[data-track-action='Hide cookie banner']"
const submitBtn = ".gem-c-button--bottom-margin"
const alertTitle =".govuk-error-summary__title"
const alertErrorMessage = "a:contains('Please answer this question')"
const errorMessage = ".govuk-error-message"
const holidayEntitlement = "p:contains('The statutory')"

export default class commonPageHelper{
    
    static Accept_Cookies()
    {
        cy.get(acceptCookies).click()
    }
    
    static Hide_Cookies_Banner()
    {
        cy.get(hideCookiesBanner).click()
    }
        
    static Submit()
    {
        cy.get(submitBtn).click()
    }

    static Assert_Alert_Title()
    {
        cy.get(alertTitle).should('be.visible')
    }

    static Assert_Alert_Error_Message()
    {
        cy.get(errorMessage).should('be.visible')
    }

    static Assert_Error_Message(message)
    {
        cy.get(alertErrorMessage).should('be.visible').contains(message)
    }

    static Assert_Holidays_Days_Value(inputValue)
    {
        cy.get(holidayEntitlement).should('be.visible').contains(`The statutory holiday entitlement is ${inputValue} days holiday.`)
    }
    
    static Assert_Holidays_Hours_Value(inputValue)
    {
        cy.get(holidayEntitlement).should('be.visible').contains(`The statutory entitlement is ${inputValue} hours holiday.`)
    }
}
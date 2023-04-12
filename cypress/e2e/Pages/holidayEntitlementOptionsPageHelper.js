const daysWorked = "#response-0"
const hoursWorked = "#response-1"
const casualIrregularWorked = "#response-2"
const annualisedHours = "#response-3"
const compressedHours = "#response-4"
const shifts = "#response-5"

export default class holidayEntitlementOptionsHelper{
    static Verify_Entitlement_Options()
    {
        cy.get(daysWorked).next().should('be.visible').contains('days worked per week')
        cy.get(hoursWorked).next().should('be.visible').contains('hours worked per week')
        cy.get(casualIrregularWorked).next().should('be.visible').contains('casual or irregular hours, including zero hours contracts')
        cy.get(annualisedHours).next().should('be.visible').contains('annualised hours')
        cy.get(compressedHours).next().should('be.visible').contains('compressed hours')
        cy.get(shifts).next().should('be.visible').contains('shifts')
    }
    
    static Select_Days_Worked_Option()
    {
        cy.get(daysWorked).click()
    }
    
    static Select_Hours_Worked_Option()
    {
        cy.get(hoursWorked).click()
    }
}
const fullLeaveYear = "#response-0"
const startingPartway = "#response-1"
const leavingPartway = "#response-2"
const startLeavePartway = "#response-3"

export default class holidayYearOptionsHelper{
    static Verify_Entitlement_Options()
    {
        cy.get(fullLeaveYear).next().should('be.visible').contains('for a full leave year')
        cy.get(startingPartway).next().should('be.visible').contains('for someone starting part way through a leave year')
        cy.get(leavingPartway).next().should('be.visible').contains('for someone leaving part way through a leave year')
        cy.get(startLeavePartway).next().should('be.visible').contains('for someone starting and leaving part way through a leave year')
    }
    
    static Select_FullLeaveYear_Option()
    {
        cy.get(fullLeaveYear).click()
    }
    
    static Select_StartingPartway_Option()
    {
        cy.get(startingPartway).click()
    }    

    static Select_LeavingPartway_Option()
    {
        cy.get(leavingPartway).click()
    }    

    static Select_StartLeavePartway_Option()
    {
        cy.get(startLeavePartway).click()
    }
}
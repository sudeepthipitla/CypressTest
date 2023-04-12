const daysinput = "#response"

export default class daysWorkedHelper{

    static Select_FullLeaveYear_Option(inputValue)
    {
        cy.get(daysinput).type(inputValue)
    }
    
}
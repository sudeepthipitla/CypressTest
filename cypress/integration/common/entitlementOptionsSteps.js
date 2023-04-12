import entitlementOptionsHelper from '../../e2e/Pages/holidayEntitlementOptionsPageHelper'

Then('Holiday Entitlement Options displayed', () => {
    entitlementOptionsHelper.Verify_Entitlement_Options();
})

When('I Select days worked per week option', () => {
    entitlementOptionsHelper.Select_Days_Worked_Option();
})

When('I Select hours worked per week option', () => {
    entitlementOptionsHelper.Select_Hours_Worked_Option();
})
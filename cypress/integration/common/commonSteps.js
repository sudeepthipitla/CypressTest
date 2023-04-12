import entitlementOptionsHelper from '../../e2e/Pages/holidayEntitlementOptionsPageHelper'
import commonPage from '../../e2e/Pages/commonPageHelper'
import landingPage from '../../e2e/Pages/landingPageHelper.cy'
import commonPageHelper from '../../e2e/Pages/commonPageHelper'

When('I launch the application url', () => {
    cy.visit('/')
})

Then('I Click on Accept Cookies', () => {
    commonPage.Accept_Cookies();
})

Then('I Click on Hide Cookies Message', () => {
    commonPage.Hide_Cookies_Banner();
})

Given('I Navigate to Application Landing Page', () => {
    cy.visit('/')
    landingPage.Verify_HomePage();
    commonPage.Accept_Cookies();
    commonPage.Hide_Cookies_Banner();
})

Then('Holiday Entitlement Options displayed', () => {
    entitlementOptionsHelper.Verify_Entitlement_Options();
})

When('I Click on Continue button', () => {
    commonPage.Submit();
})

When('Selection Mandatory Error Message Displayed', () => {
    commonPage.Assert_Alert_Title();
    commonPage.Assert_Alert_Error_Message();
    commonPage.Assert_Error_Message('Please answer this question');
})

Then('entitlement is {string} days message displayed', (daysValue) => {
    commonPageHelper.Assert_Holidays_Days_Value(daysValue);
})

Then('entitlement is {string} hours message displayed', (daysValue) => {
    commonPageHelper.Assert_Holidays_Hours_Value(daysValue);
})
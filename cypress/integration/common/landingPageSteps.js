import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import landingPage from  '../../e2e/Pages/landingPageHelper.cy'

When('I Click on Startnow button', () => {
    landingPage.StartNow();
})

Then('the application landing page displayed', () => {
    landingPage.Verify_HomePage();
})
import commonPageHelper from '../../e2e/Pages/commonPageHelper';
import holidayYearOptionsHelper from '../../e2e/Pages/holidayYearOptionsHelper'
import daysWorkedHelper from '../../e2e/Pages/daysWorkedPageHelper'

Then('I Select Full Leave Year Option and click Continue', () => {
    holidayYearOptionsHelper.Select_FullLeaveYear_Option();
    commonPageHelper.Submit();
})


Then('I Enter Value {string} in number of days textbox', (daysValue) => {
    daysWorkedHelper.Select_FullLeaveYear_Option(daysValue);
})


Then('I Enter Value {string} in number of hours textbox', (daysValue) => {
    daysWorkedHelper.Select_FullLeaveYear_Option(daysValue);
})
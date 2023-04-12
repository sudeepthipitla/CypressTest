Feature: Days Worked Per Week Option

Scenario: Days Worked Per Week for a Full leave year
  Given I Navigate to Application Landing Page
  When I Click on Startnow button
  Then Holiday Entitlement Options displayed
  When I Select days worked per week option
  When I Click on Continue button
  Then I Select Full Leave Year Option and click Continue
  Then I Enter Value "5" in number of days textbox
  When I Click on Continue button
  Then entitlement is "28" days message displayed

@ignore
Scenario: Starting Partway through a year option

@ignore
Scenario: Leaving Partway through a year option

@ignore
Scenario: Starting and Leaving Partway through a year option

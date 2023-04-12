1. Download the Repository from GitHub Account
2. Extract the folder if required
3. Open a Command Prompt and navigate to the above folder
4. In the Command Prompt type "npm install" followed by enter key
5. In the Command Prompt type "npm run Suite" followed by enter key
6. Now, Chrome browser will open for each feature and run the tests specified within that feature
7. Video of the runs for each feature is stored under the below path
  Cypresstest\cypress\videos
7. In the end, a full result will get displayed in the command prompt as below.


  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  01_LandingPage.feature                   00:01       18       18        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  02_HolidayEntitlementOptions.featur      00:01       14       14        -        -        - │
  │    e                                                                                           │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  03_DaysWorkedPerWeek.feature             00:02        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  04_HoursWorkedPerWeek.feature            00:02        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  05_Casual_Irregular_Zero_hours.feat      168ms        4        4        -        -        - │
  │    ure                                                                                         │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  06_AnnualisedHours.feature               151ms        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  07_CompressedHours.feature               181ms        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  08_Shifts.feature                        147ms        4        4        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:08       56       56        -        -        -
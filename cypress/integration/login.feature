Feature: Login to Flipkart

    @Scenario
    Scenario Outline: Logging to flipkart

        Given user launches the flipkart website
        Then user enters the details "<username>" & "<password>" and click on login button
        Then user logs out of the application

        Examples:
            | username             | password |
            | dipyaman96@gmail.com | dipy@123 |



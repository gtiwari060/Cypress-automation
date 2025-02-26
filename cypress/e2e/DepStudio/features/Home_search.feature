Feature: DepStudio Homepage Search functionality

    Scenario: Search for a Project where data is present
        Given I can navigate to the Home page of the DepStudio
        When  I can enter the text production in the search box
        And  I can click to search icon
        Then I should be able to view all the searched results


    Scenario: Search for a Project where data is not present
        Given I can navigate to the Home page of the DepStudio
        When  I can enter the text slh in the search box
        And  I can click to search icon
        Then I should be able to view No records to show. message


Feature: Testing the Service Life Analysis Page functionality

    Scenario: Click on an Account on the Service life analysis page
        Given I can navigate to the Service life analysis page for a project named Production
        When I click on an Account on the Service life analysis page
        Then I can view the Account title and Account number in the graph panel

    Scenario Outline: Add New band functionality
    Given I can navigate to the Service life analysis page for a project named <searchtext>
    When I click on Add Bands button
    And I select the account under which the band is to be added
    And I add all the Details with Exp Band <expBandBgn> - <expBandEnd> and Placement Band <placBandBgn> - <placBandEnd>
    And I click on Add button
    Then I can see the toast message <message>

    Examples:
        | searchtext | expBandBgn | expBandEnd | placBandBgn | placBandEnd | message |
        | Cypress | 1960 | 2022  | 1965 | 2022 | duplicate |
        | Cypress | 1961 | 2022  | 1966 | 2022 | successfully |


    Scenario: Delete the Added Band
    Given I can navigate to the Service life analysis page for a project named Cypress
    And I can open and view all the bands for an account
    When I can click on the Delete button for a band
    Then I can see the toast message deleted

    Scenario Outline: View all the Annual Statistics for an Account
        Given I can navigate to the Service life analysis page for a project named Cypress
        When I can click on an account and select an Account <Accountnumber>
        And I can scroll to the Annual Statistics section
        Then I can see all the Annual Stats for that account <Chart>

        Examples:
            | Accountnumber | Chart                                 |
            | 31400         | "Additions And Balances"              |
            | 31400         | "Regular Retirements And Average Age" |
            | 31400         | "Additions And Growth"                |
            | 31400         | "Regular Retirements Percentages"     |
            | 31400         | "Multiple Original Group Life Table"  |

    # Scenario: 





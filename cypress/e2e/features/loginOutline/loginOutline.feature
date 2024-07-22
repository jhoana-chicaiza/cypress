Feature: loginOutline

Scenario Outline: Login with invalid credentials
Given I am on the login page
When I fill in my email and password with "<user>" and "<pass>"
Then I should validate that I am not logged

Examples: 
|user|pass|
|username3|password3|
|username4|password4|
|username2|password3|
|username5|password4|


# Tutorial Ninja Web Application Test Automation

This project is a test automation suite built using Cypress. It includes a login test for the tutorial ninja web application. The following are the tested scenerios:

1. Valid login
2. Invalid login
3. Login without filling textboxes. 

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Writing Tests](#writing-tests)
- [Custom Commands](#custom-commands)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, you'll need to have [Node.js](https://nodejs.org/) installed. Then follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/audukehinde/saucedemo.git
    cd saucedemo
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Setup

### Cypress Configuration

Cypress is configured via the `cypress.config.js` file. You can modify the base URL and other settings there to match your application's configuration.

### Fixtures

Fixtures are stored in the `cypress/fixtures` directory. These files contain data that you can use in your tests. For this project, there two(2) json files in the fixtures folder and they are the following:

1. Credentials(Json) file - This is used to store the login credentials for the test.
2. Selector(Json) file - This is used to store the UI elemenmt to code maintainability and reusability.

### Custom Commands

Custom Cypress commands are located in `cypress/support/commands.js`. You can add your own custom commands here. Custom commands are added here to help maintain and reuse our codes efficiently and to enforce best practices. The below are the custom commands written for this project:
1. userValidLogin
2. userInvalidLogin
3. userEmptyLogin
4. logout
5. ClickElement
6. Inputelement
7. verifyUrl

## Running Tests

### Open Cypress Test Runner

To open the Cypress Test Runner, run:
```sh
npm cypress open

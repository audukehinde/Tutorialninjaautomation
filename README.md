# Cypress Project

This project is a test automation suite built using Cypress. It includes a login test for the tutorial ninja web application. The following are the scenerios:

1. Valid login
2. Invalid login
3. Login without filling the textboxes. 

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
    git clone https://github.com/your-username/your-cypress-project.git
    cd your-cypress-project
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Setup

### Cypress Configuration

Cypress is configured via the `cypress.config.js` file. You can modify the base URL and other settings there to match your application's configuration.

### Fixtures

Fixtures are stored in the `cypress/fixtures` directory. These files contain data that you can use in your tests.

### Custom Commands

Custom Cypress commands are located in `cypress/support/commands.js`. You can add your own custom commands here.

## Running Tests

### Open Cypress Test Runner

To open the Cypress Test Runner, run:
```sh
npm run cy:open

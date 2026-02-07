# Playwright Automation E2E Test Project - POM

[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)](https://playwright.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

A comprehensive end-to-end testing project demonstrating modern test automation practices using Playwright with the Page Object Model (POM) design pattern. This framework provides a scalable, maintainable, and robust solution for automating web application testing across multiple browsers.

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Page Object Model](#page-object-model)
- [Test Data Management](#test-data-management)
- [Reporting](#reporting)
- [Best Practices](#best-practices)
- [Contributing](#contributing)

## 🎯 Overview

This project showcases a production-ready test automation framework built with Playwright and JavaScript, implementing the Page Object Model design pattern for improved test maintainability and reusability. The framework is designed to test modern web applications with support for multiple browsers, parallel execution, and comprehensive reporting.

## ✨ Key Features

- **Page Object Model (POM)**: Clean separation of test logic and page interactions
- **Cross-Browser Testing**: Support for Chromium, Firefox, and WebKit
- **Data-Driven Testing**: Externalized test data for flexible test scenarios
- **Screenshot Capture**: Automatic screenshot capture on test failures
- **Parallel Execution**: Run tests in parallel for faster feedback
- **Reusable Components**: Modular design with reusable page objects and utilities
- **Easy Maintenance**: Centralized locators and simplified test updates
- **Comprehensive Configuration**: Flexible playwright configuration for different environments

## 📁 Project Structure

```
playwright-automation-e2e-test-project-1-POM/
│
├── pageobjects/              # Page Object Model classes
│   ├── BasePage.js          # Base page with common methods
│   ├── LoginPage.js         # Login page objects and methods
│   └── ...                  # Other page object files
│
├── tests/                   # Test specifications
│   ├── login.spec.js       # Login functionality tests
│   └── ...                 # Other test files
│
├── test-data/              # Test data files
│   ├── credentials.json    # User credentials
│   └── ...                 # Other test data
│
├── screenshots/            # Test execution screenshots
│   └── ...                 # Captured screenshots
│
├── playwright.config.js    # Playwright configuration
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Dependency lock file
└── .gitignore            # Git ignore rules
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (version 8.x or higher)
- **Git** (for version control)

Check your installations:

```bash
node --version
npm --version
git --version
```

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/SricharanKancharla/playwright-automation-e2e-test-project-1-POM.git
cd playwright-automation-e2e-test-project-1-POM
```

2. **Install dependencies**

```bash
npm install
```

3. **Install Playwright browsers**

```bash
npx playwright install
```

## ⚙️ Configuration

The `playwright.config.js` file contains all configuration settings for the test framework:

- **Browser Configuration**: Define which browsers to test against
- **Test Directory**: Specify test file locations
- **Timeouts**: Configure test and action timeouts
- **Retries**: Set retry policies for failed tests
- **Parallel Execution**: Configure parallel test execution
- **Screenshots**: Enable automatic screenshot capture
- **Video Recording**: Optional video recording of test execution

### Example Configuration

```javascript
// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  workers: 4,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
};
```

## 🧪 Running Tests

### Run all tests

```bash
npm test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run specific test file

```bash
npx playwright test tests/login.spec.js
```

### Run tests in a specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### Generate test report

```bash
npx playwright show-report
```

## 🏗️ Page Object Model

The Page Object Model (POM) is a design pattern that creates an object repository for storing all web elements. Each web page is represented as a separate class file containing:

- **Locators**: Element selectors for the page
- **Actions**: Methods to interact with page elements
- **Verifications**: Methods to validate page state

## 📊 Test Data Management

Test data is externalized in the `test-data/` directory to support data-driven testing:

- **JSON files**: Store test data in JSON format for easy management
- **Environment-specific data**: Separate data files for different environments
- **Credentials**: Secure storage of test credentials (use environment variables for sensitive data)


## 📸 Reporting

### Screenshots

- Automatically captured on test failures
- Stored in the `screenshots/` directory
- Configurable in `playwright.config.js`

### HTML Report

Generate and view comprehensive HTML reports:

```bash
npx playwright show-report
```

### Test Artifacts

- **Screenshots**: Visual evidence of test failures
- **Videos**: Full test execution recordings (if enabled)
- **Traces**: Detailed execution traces for debugging

## Best Practices

### Test Organization

- **One test file per feature**: Keep tests focused and organized
- **Descriptive test names**: Use clear, descriptive test names
- **Arrange-Act-Assert**: Follow AAA pattern for test structure

### Page Objects

- **Single Responsibility**: Each page object represents one page
- **Encapsulation**: Hide implementation details inside page objects
- **Return values**: Page methods return values for verification in tests
- **Method chaining**: Support fluent interfaces where appropriate

### Locators

- **Prefer user-facing attributes**: Use role, text, and label selectors
- **Avoid brittle selectors**: Minimize use of CSS/XPath based on structure
- **Data-testid**: Use data-testid attributes for test-specific selectors

### Test Data

- **Externalize data**: Keep test data separate from test logic
- **Environment variables**: Use for sensitive or environment-specific data
- **Test isolation**: Each test should be independent and idempotent

### Maintenance

- **Regular updates**: Keep dependencies and browsers up to date
- **Code reviews**: Review test code with the same rigor as production code
- **Refactoring**: Regularly refactor to reduce duplication and improve clarity

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow JavaScript best practices and conventions
- Write clear, self-documenting code
- Add comments for complex logic
- Ensure all tests pass before submitting PR
- Update documentation as needed

## 📞 Contact

**Sricharan Kancharla**

- GitHub: [@SricharanKancharla](https://github.com/SricharanKancharla)
- Repository: [playwright-automation-e2e-test-project-1-POM](https://github.com/SricharanKancharla/playwright-automation-e2e-test-project-1-POM)

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) - Microsoft's powerful browser automation framework
- [Playwright Community](https://github.com/microsoft/playwright) - For excellent documentation and support
- [Page Object Model](https://martinfowler.com/bliki/PageObject.html) - Martin Fowler's design pattern

---

**Happy Testing! 🎭**

For more information about Playwright, visit the [official documentation](https://playwright.dev/docs/intro).
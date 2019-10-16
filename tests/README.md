# Test Automation Tools for Testing ReactJS Applications

There is no concept of “best tool” when it comes to automated testing. It all depends on the context of your project and what you want to achieve from the tool. However, there seems to be a growing number of JS based test automation tools and frameworks to test ReactJS applications. 

## Tools

### Jest

Jest is used by Facebook to test all JavaScript code including React applications. One of Jest’s philosophies is to provide an integrated “zero-configuration” experience. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in more stable and healthy code bases. Jest also parallelizes test runs across workers to maximize performance.

### Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output. Originally developed by Airbnb, is getting more and more popular. You can use it with any test runner (mocha, jasmine,…) and there is a helpful chai-enzyme plugin.

Enzyme + Mocha seems to be the best combination to test web applications written in ReactJS. It is relatively easy to learn, even for someone new to ReactJS and Mocha can easily cope with these tools in a short time.

### Mocha

While Jest is popular amongst Facebook developers to write automated tests for ReactJS applications, it has some issues (slow, mocking is confusing). Mocha has become a popular alternative. It’s more painful to set up but may be worth a look. I expect it to become more popular in the future unless Jest overcomes some of those main issues. See Testing React Web Apps with Mocha to get started.

### Protractor

For acceptance testing, you can consider Protector. It’s primarily an Angular tool built on top of Selenium and it comes with a nicer API. Fortunately, it’s possible to configure it to work with React. See Testing React apps with Protractor. The nice thing about this approach is that this will allow you to test your application against a wide variety of browsers.

### WebDriver.io

WebdriverIO is an open source testing utility for Node.js. It makes it possible to write super easy selenium tests with Javascript in your favorite BDD or TDD test framework.

### Nightwatch.js

Nightwatch.js is an easy to use Node.js based End-to-End (E2E) testing solution for browser-based apps and websites. It uses the powerful W3C WebDriver API to perform commands and assertions on DOM elements.

#### Niffy 

This is a perceptual diffing tool built on Nightmare. It helps you detect UI changes and bugs across releases of your web app.

####  Daydream 

This is a complimentary chrome extension that generates Nightmare scripts for you while you browse.


import { createBdd } from "playwright-bdd";
import { test } from "./tests/Fixtures/fixtures";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);

// Navigate
Given("I navigate to {string}", async ({ UATLoginPage }, url) => {
  // page.loginPage = new UATLoginPage(page);
  await UATLoginPage.navigateToPage(url);
});

// Login
Given("I enter Username {string}", async ({ UATLoginPage }, username) => {
  await UATLoginPage.enterUsername(username);
});

Given(
  "I enter the Password {string} and press Enter",
  async ({ UATLoginPage }, password) => {
    await UATLoginPage.enterPassword(password);
    await UATLoginPage.pressEnterKey();
  },
);

Given("I click Log in button", async ({ UATLoginPage }) => {
  await UATLoginPage.clickLoginButton();
});

Then(
  "I should verify Text contains {string}",
  async ({ UATLoginPage }, expectedText) => {
    await UATLoginPage.verifySuccessfulLogin(expectedText);
  },
);

Then("I should navigate to the Home page", async ({ UATLoginPage }) => {
  await UATLoginPage.verifyHomePageNavigation();
});

Then(
  "I should verify text contains {string}",
  async ({ UATLoginPage }, arg) => {
    await UATLoginPage.verifyTextContains(arg);
  },
);

Then(
  "I should see login error message {string}",
  async ({ UATLoginPage }, message) => {
    await UATLoginPage.verifyLoginError(message);
  },
);

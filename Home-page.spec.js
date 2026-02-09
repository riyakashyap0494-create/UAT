import { test, expect } from "@playwright/test";

test("Save your pass alert", async ({ page }) => {
  await page.goto(
    "https://uat.serversidegraphics.com/pcs/administration/pcs/login.aspx",
  );

  const pageTitle = page.title();

  console.log("Page title is", pageTitle);

  expect(page).toHaveTitle("Administration Login");

  await page.click("id=txtUserCode");

  await page.fill("id=txtUserCode", "ssgadmin@ssgagg.com");

  const password = page.locator("#txtPassword");

  await password.click("#txtPassword");

  await password.fill("VTjq5Ec$M3");

  await password.press("Enter");

  const loginBtn = page.locator("#cmdLogin");

  await expect(loginBtn).toBeEnabled();

  await loginBtn.click();

  await page.waitForTimeout(3000);

  await page.click("#Header1_lbHome");

  await page.waitForTimeout(3000);

  //await page.click("//a[normalize-space()='Manage your card programs']");

  // await page.click("//a[normalize-space()='Manage your gallery designs']");

  //await page.click("//a[normalize-space()='Check submitted images']");

  await page.click("//img[@title='Users']");

  await page.waitForTimeout(4000);
});

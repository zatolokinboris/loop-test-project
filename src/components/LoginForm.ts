import type { Locator, Page } from "@playwright/test";

/**
 * Login form of the demo app.
 */
export class LoginForm {
  /**
   * Form title "Project Board Login"
   */
  public titleLocator: Locator;

  /**
   * Username input
   */
  public usernameInputLocator: Locator;

  /**
   * Password input
   */
  public passwordInputLocator: Locator;

  /**
   * "Sign in" submit button
   */
  public submitButtonLocator: Locator;

  constructor(private readonly page: Page) {
    this.titleLocator = page.getByRole("heading", { name: "Project Board Login" });
    this.usernameInputLocator = page.locator("#username");
    this.passwordInputLocator = page.locator("#password");
    this.submitButtonLocator = page.getByRole("button", { name: "Sign in" });
  }

  /**
   * Types the username and password, then clicks "Sign in"
   * @param username Username
   * @param password Password
   */
  public async login(username: string, password: string): Promise<void> {
    await this.usernameInputLocator.fill(username);
    await this.passwordInputLocator.fill(password);
    await this.submitButtonLocator.click();
  }
}

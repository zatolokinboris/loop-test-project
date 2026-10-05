import type { BasePageProps } from "~/core/BasePage";
import { BasePage } from "~/core/BasePage";
import { LoginForm } from "~/components/LoginForm";

/**
 * Login page of the demo app.
 */
export class LoginPage extends BasePage {
  /**
   * Login form
   * @category Components
   */
  public loginForm: LoginForm;

  constructor(props: BasePageProps) {
    super(props);
    this.loginForm = new LoginForm(props.page);
  }

  /**
   * Opens the start page. The address comes from baseURL in the Playwright config.
   */
  public async open(): Promise<void> {
    await this.page.goto("/");
  }
}

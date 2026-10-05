import type { Page } from "@playwright/test";

export type BasePageProps = {
  page: Page;
};

/**
 * Base class for all pages. It keeps the Playwright page.
 */
export abstract class BasePage {
  protected constructor(protected readonly props: BasePageProps) {}

  /**
   * The Playwright page
   */
  public get page(): Page {
    return this.props.page;
  }
}

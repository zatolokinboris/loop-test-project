import type { Locator, Page } from "@playwright/test";

/**
 * Left sidebar with the list of projects.
 */
export class ProjectsSidebar {
  /**
   * The sidebar block
   */
  public rootLocator: Locator;

  constructor(private readonly page: Page) {
    this.rootLocator = page.locator("nav");
  }

  /**
   * Finds the project button by its exact name
   * @param projectName Project name, for example "Web Application"
   */
  public getProjectButton(projectName: string): Locator {
    return this.rootLocator.getByRole("button").filter({
      has: this.page.getByRole("heading", { name: projectName, exact: true }),
    });
  }

  /**
   * Opens a project: clicks its button in the sidebar
   * @param navProjectName Project name, for example "Web Application"
   */
  public async openProject(navProjectName: string): Promise<void> {
    await this.getProjectButton(navProjectName).click();
  }
}

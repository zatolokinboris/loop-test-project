import type { Locator, Page } from "@playwright/test";

import { TaskCardComponent } from "~/components/TaskCardComponent";
import { escapeRegExp } from "~/utils/escape-regexp";

/**
 * One column on the board: "To Do", "In Progress", "Review" or "Done".
 */
export class BoardColumnComponent {
  /**
   * Column title. The text also has a counter, for example "To Do(2)"
   */
  public titleLocator: Locator;

  /**
   * The whole column
   */
  public rootLocator: Locator;

  /**
   * @param page Playwright page
   * @param columnName Column name without the counter, for example "In Progress"
   */
  constructor(
    private readonly page: Page,
    columnName: string
  ) {
    this.titleLocator = page
      .locator("main h2")
      .filter({ hasText: new RegExp(`^${escapeRegExp(columnName)}\\s*\\(`) });
    this.rootLocator = this.titleLocator.locator("..");
  }

  /**
   * Finds a task card in this column by its exact title
   * @param taskTitle Task title, for example "Fix navigation bug"
   */
  public getTask(taskTitle: string): TaskCardComponent {
    return new TaskCardComponent(
      this.rootLocator.getByRole("heading", { level: 3, name: taskTitle, exact: true })
    );
  }
}

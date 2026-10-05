import type { Locator } from "@playwright/test";

import type { BasePageProps } from "~/core/BasePage";
import { BasePage } from "~/core/BasePage";
import { BoardColumnComponent } from "~/components/BoardColumnComponent";
import { ProjectsSidebar } from "~/components/ProjectsSidebar";
import type { TaskCardComponent } from "~/components/TaskCardComponent";

/**
 * The project board
 */
export class BoardPage extends BasePage {
  /**
   * Sidebar with the projects
   * @category Components
   */
  public sidebar: ProjectsSidebar;

  /**
   * Name of the opened project in the page header
   * @category Locators
   */
  public projectTitleLocator: Locator;

  /**
   * "Logout" button in the page header
   * @category Locators
   */
  public logoutButtonLocator: Locator;

  constructor(props: BasePageProps) {
    super(props);
    this.sidebar = new ProjectsSidebar(props.page);
    this.projectTitleLocator = props.page.getByRole("banner").getByRole("heading", { level: 1 });
    this.logoutButtonLocator = props.page.getByRole("button", { name: "Logout" });
  }

  /**
   * Finds a board column by its name
   * @param columnName Column name, for example "To Do"
   */
  public getColumn(columnName: string): BoardColumnComponent {
    return new BoardColumnComponent(this.page, columnName);
  }

  /**
   * Finds a task card by its title in the given column
   * @param columnName Column name, for example "To Do"
   * @param taskTitle Task title, for example "Fix navigation bug"
   */
  public getTask(columnName: string, taskTitle: string): TaskCardComponent {
    return this.getColumn(columnName).getTask(taskTitle);
  }
}

import type { Locator } from "@playwright/test";

/**
 * One task card in a column.
 */
export class TaskCardComponent {
  /**
   * The whole card
   */
  public rootLocator: Locator;

  /**
   * Task title
   */
  public titleLocator: Locator;

  /**
   * Tags of the task, for example "Feature" or "High Priority".
   * Tags are spans right inside a div of the card. The name and date spans are deeper, so they are not selected.
   */
  public tagLocators: Locator;

  /**
   * @param titleLocator Locator of the task title (h3). The card is its parent element.
   */
  constructor(titleLocator: Locator) {
    this.titleLocator = titleLocator;
    this.rootLocator = titleLocator.locator("..");
    this.tagLocators = this.rootLocator.locator(":scope > div > span");
  }
}

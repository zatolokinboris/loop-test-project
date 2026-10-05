import type { BoardTaskCase } from "~/data/board-task-types";
import boardTasks from "~/data/board-tasks.json";
import { expect, test } from "~/fixtures/AppFixtures";

/**
 * Data-driven tests: the loop creates one test for each item in board-tasks.json.
 */

for (const { id, project, column, task, tags } of boardTasks as BoardTaskCase[]) {
  const formattedTags = tags.map((tag) => `"${tag}"`).join(" ");

  test(
    `Test Case ${id}: "${task}" is in "${column}" of "${project}" with tags ${formattedTags}`,
    async ({ loginPage, boardPage, credentials }) => {
      const taskCard = boardPage.getTask(column, task);

      await test.step("Login to Demo App", async () => {
        await loginPage.open();
        await expect(
          loginPage.loginForm.titleLocator,
          "Login form is displayed"
        ).toBeVisible();

        await loginPage.loginForm.login(credentials.login, credentials.password);
        await expect(
          boardPage.logoutButtonLocator,
          "User is authorized, 'Logout' button is displayed"
        ).toBeVisible();
      });

      await test.step(`Navigate to "${project}"`, async () => {
        await boardPage.sidebar.openProject(project);
        await expect(
          boardPage.projectTitleLocator,
          `Project "${project}" is opened`
        ).toHaveText(project);
      });

      await test.step(`Verify "${task}" is in the "${column}" column`, async () => {
        await expect(
          taskCard.titleLocator,
          `Task "${task}" is displayed in the "${column}" column`
        ).toBeVisible();
      });

      await test.step(`Confirm tags: ${formattedTags}`, async () => {
        await expect(
          taskCard.tagLocators,
          "Task has exactly the expected tags"
        ).toHaveText(tags);
      });
    }
  );
}

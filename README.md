# Demo

Automated tests for the [demo project board app](https://create-asana-like-pr-39y5.bolt.host/).

Each test does the same steps:
1. Log in.
2. Open a project ("Web Application" or "Mobile Application").
3. Check that a task is in the right column (for example "To Do").
4. Check that the task has the right tags.

## Setup

```bash
npm install
npx playwright install
```

The login and password from the task (`admin` / `password123`) are used by default, so you do not need to set anything.
If you want to use other values, copy `.env.example` to `.env` and change them.

## Run the tests

```bash
npm test                    # run all tests (headless)
npm test -- --headed        # run with a visible browser
npm run start:ui-mode       # open Playwright UI mode
npx playwright show-report  # open the report of the last run
```

## How the tests use data

The tests are data-driven. All test cases are in [src/data/board-tasks.json](src/data/board-tasks.json).
The file [tests/board-task-details.spec.ts](tests/board-task-details.spec.ts) reads this JSON and creates one test for each item.

To add a new test case, add a new item to the JSON file. You do not need to write new test code.

```json
{
  "id": 1,
  "project": "Web Application",
  "column": "To Do",
  "task": "Implement user authentication",
  "tags": ["Feature", "High Priority"]
}
```

## Project structure

The project uses the Page Object Model. Locators are in components, and pages use these components.

```
src/
  core/        base page class
  components/  login form, projects sidebar, board column, task card
  pages/       login page, board page
  fixtures/    test fixtures (pages and credentials)
  data/        test cases (JSON), types, and enums (project, column, tag names)
  utils/       small helper functions
tests/
  board-task-details.spec.ts   the data-driven test
```

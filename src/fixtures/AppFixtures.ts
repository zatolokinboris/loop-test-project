import { test as base } from "@playwright/test";

import { BoardPage } from "~/pages/BoardPage";
import { LoginPage } from "~/pages/LoginPage";

export type UserCredentials = {
  login: string;
  password: string;
};

export type AppFixtures = {
  credentials: UserCredentials;
  loginPage: LoginPage;
  boardPage: BoardPage;
};

export const test = base.extend<AppFixtures>({
  credentials: async ({}, use) => {
    // Can be changed in .env.
    await use({
      login: process.env.APP_LOGIN || "admin",
      password: process.env.APP_PASSWORD || "password123",
    });
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage({ page }));
  },

  boardPage: async ({ page }, use) => {
    await use(new BoardPage({ page }));
  },
});

export { expect } from "@playwright/test";

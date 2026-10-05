import type { ColumnName } from "~/data/enum/column-name";
import type { ProjectName } from "~/data/enum/project-name";
import type { TaskTag } from "~/data/enum/task-tag";

/**
 * One test case from board-tasks.json.
 * The task must be in this column of this project and have exactly these tags.
 * The values are the same strings as in the enums, so the JSON stays simple.
 */
export type BoardTaskCase = {
  id: number;
  project: `${ProjectName}`;
  column: `${ColumnName}`;
  task: string;
  tags: `${TaskTag}`[];
};

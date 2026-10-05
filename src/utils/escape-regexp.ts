/**
 * Adds a backslash before special RegExp characters, so you can use normal text inside a RegExp
 * @param value Text to escape
 */
export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

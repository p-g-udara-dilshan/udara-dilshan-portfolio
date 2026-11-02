/**
 * Static content editor for VS Code: src/data/siteContent.json
 * No API calls, database, login, or browser storage required.
 * After editing the JSON, run npm run build and git push to publish.
 */
import siteContent from './siteContent.json'
export type ContentOverrides = Record<string, unknown>
const content: ContentOverrides = siteContent as ContentOverrides
export function readAllOverrides(): ContentOverrides { return content }
export function readContentOverride<T>(key: string, fallback: T): T {
  const value = content[key]
  return value === undefined ? fallback : value as T
}

import { DEFAULT_BASE_URL_V1 } from '../../../constants';
import { fetchJson } from '../../../http/fetchJson';
import {
  CurrentSkaterStatLeadersResponse,
  SkaterStatLeaderCategory,
} from '../../../types';

/**
 * Configuration options for {@link getCurrentSkaterStatLeaders}.
 */
export interface GetCurrentSkaterStatLeadersConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** Categories you want to see stat leaders in. These are ORs not ANDs, so you will see a list of top "goals" and a list of top "assists" separately if you give those two categories. */
  categories?: SkaterStatLeaderCategory[];
  /** -1 will return all results. */
  limit?: number;
}

/**
 * Fetches the current NHL skater stat leaders.
 *
 * Retrieves leaderboard data for one or more skater stat categories.
 * By default, returns top leaders across the entire league for the current season.
 *
 * @param {GetCurrentSkaterStatLeadersConfig} config - Configuration object.
 * @param {string} [config.baseUrl] - Optional API base URL override (defaults to `DEFAULT_BASE_URL_V1`).
 * @param {SkaterStatLeaderCategory[]} [config.categories] - Categories of skater stats to return.
 * @param {number} [config.limit] - Max results per category (`-1` for all results).
 *
 * @returns {Promise<CurrentSkaterStatLeadersResponse>} A promise resolving to skater stat leaderboards.
 *
 * @example
 * ```ts
 * const leaders = await getCurrentSkaterStatLeaders({
 *   categories: ["goals", "assists"],
 *   limit: 10
 * });
 * console.log(leaders);
 * ```
 *
 * @example
 * ```ts
 * // Get *all* results for points leaders
 * const pointsLeaders = await getCurrentSkaterStatLeaders({
 *   categories: ["points"],
 *   limit: -1
 * });
 * ```
 *
 * @example
 * ```ts
 * // With a mock/test API base URL
 * const leadersMock = await getCurrentSkaterStatLeaders({
 *   baseUrl: "http://localhost:4000/mock-api",
 *   categories: ["goals"]
 * });
 * ```
 */
export function getCurrentSkaterStatLeaders(
  config: GetCurrentSkaterStatLeadersConfig
): Promise<CurrentSkaterStatLeadersResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;

  let url = `${baseUrl}/skater-stats-leaders/current`;

  if (config?.categories) {
    url += `?categories=${config.categories.join(',')}`;
  }

  if (config?.limit) {
    if (config?.categories) {
      url += `&limit=${config.limit}`;
    } else {
      url += `?limit=${config.limit}`;
    }
  }

  return fetchJson<CurrentSkaterStatLeadersResponse>(url);
}

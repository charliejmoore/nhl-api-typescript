import { DEFAULT_BASE_URL_V1 } from '../../../constants';
import { fetchJson } from '../../../http/fetchJson';
import {
  CurrentGoalieStatLeadersResponse,
  GoalieStatLeaderCategory,
} from '../../../types';

/**
 * Configuration options for {@link getCurrentGoalieStatLeaders}.
 */
export interface GetCurrentGoalieStatLeadersConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** Categories you want to see stat leaders in. These are ORs not ANDs, so you will see a list of top "goals" and a list of top "assists" separately if you give those two categories. */
  categories?: GoalieStatLeaderCategory[];
  /** -1 will return all results. */
  limit?: number;
}

/**
 * Fetches the current NHL goalie stat leaders.
 *
 * Retrieves leaderboard data for one or more goalie stat categories.
 * By default, returns top leaders across the entire league for the current season.
 *
 * @param {GetCurrentGoalieStatLeadersConfig} config - Configuration object.
 * @param {string} [config.baseUrl] - Optional API base URL override (defaults to `DEFAULT_BASE_URL_V1`).
 * @param {GoalieStatLeaderCategory[]} [config.categories] - Categories of goalie stats to return.
 * @param {number} [config.limit] - Max results per category (`-1` for all results).
 *
 * @returns {Promise<CurrentGoalieStatLeadersResponse>} A promise resolving to goalie stat leaderboards.
 *
 * @example
 * ```ts
 * const leaders = await getCurrentGoalieStatLeaders({
 *   categories: ["savePercentage", "wins"],
 *   limit: 10
 * });
 * console.log(leaders);
 * ```
 *
 * @example
 * ```ts
 * // Get *all* results for goals against average (no limit)
 * const gaaLeaders = await getCurrentGoalieStatLeaders({
 *   categories: ["goalsAgainstAverage"],
 *   limit: -1
 * });
 * ```
 *
 * @example
 * ```ts
 * // With a mock/test API base URL
 * const leadersMock = await getCurrentGoalieStatLeaders({
 *   baseUrl: "http://localhost:4000/mock-api",
 *   categories: ["wins"]
 * });
 * ```
 */
export function getCurrentGoalieStatLeaders(
  config: GetCurrentGoalieStatLeadersConfig
): Promise<CurrentGoalieStatLeadersResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;

  let url = `${baseUrl}/goalie-stats-leaders/current`;

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

  return fetchJson<CurrentGoalieStatLeadersResponse>(url);
}

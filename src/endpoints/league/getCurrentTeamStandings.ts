import { DEFAULT_BASE_URL_V1 } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import { CurrentTeamStandingsResponse } from '../../types';

/**
 * Configuration options for {@link getCurrentTeamStandings}.
 */
export interface GetCurrentTeamStandingsConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
}

/**
 * Fetches the current NHL team standings.
 *
 * Retrieves the latest league standings snapshot (e.g., division, conference,
 * and league-wide rankings) from the NHL API.
 * The endpoint returns standings as they are **right now**.
 *
 * @param {GetCurrentTeamStandingsConfig} config - Configuration object.
 * @param {string} [config.baseUrl] - Optional API base URL override (defaults to `DEFAULT_BASE_URL_V1`).
 *
 * @returns {Promise<CurrentTeamStandingsResponse>} A promise resolving to the current team standings data.
 *
 * @example
 * ```ts
 * const standings = await getCurrentTeamStandings({});
 * console.log(standings.records); // Division/conference standings info
 * ```
 *
 * @example
 * ```ts
 * const standingsMock = await getCurrentTeamStandings({
 *   baseUrl: "http://localhost:4000/mock-api"
 * });
 * ```
 */
export function getCurrentTeamStandings(
  config: GetCurrentTeamStandingsConfig
): Promise<CurrentTeamStandingsResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;
  return fetchJson<CurrentTeamStandingsResponse>(`${baseUrl}/standings/now`);
}

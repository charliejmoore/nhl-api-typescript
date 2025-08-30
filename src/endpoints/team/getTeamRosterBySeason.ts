import { DEFAULT_BASE_URL_V1 } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import { TeamTriCode, RosterResponse } from '../../types';

/**
 * Configuration options for {@link getTeamRosterBySeason}.
 */
export interface GetTeamRosterBySeasonConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** 3-letter team code (the triCode) (e.g., "FLA" for Florida Panthers or "NYR" for New York Rangers). */
  teamCode: TeamTriCode;
  /** NHL season (e.g., 20242025). */
  season: number;
}

/**
 * Fetches the roster for a given NHL team in a specific season.
 *
 * @param {GetTeamRosterBySeasonConfig} config - Configuration object.
 * @param {string} [config.baseUrl] - Optional API base URL override.
 * @param {TeamTriCode} config.teamCode - The 3-letter abbreviation for the team.
 * @param {number} config.season - Season identifier (e.g., `20242025`).
 *
 * @returns {Promise<RosterResponse>} A promise resolving to the roster for the specified team and season.
 *
 * @example
 * ```ts
 * const roster = await getTeamRosterBySeason({
 *   teamCode: "FLA",
 *   season: 20242025
 * });
 * console.log(roster.players); // Array of players on the 2024–25 Florida Panthers
 * ```
 *
 * @example
 * ```ts
 * // With a custom base URL (for testing or mock data)
 * const rosterMock = await getTeamRosterBySeason({
 *   baseUrl: "http://localhost:4000/mock-api",
 *   teamCode: "NYR",
 *   season: 20232024
 * });
 * ```
 */
export function getTeamRosterBySeason(
  config: GetTeamRosterBySeasonConfig
): Promise<RosterResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;
  return fetchJson<RosterResponse>(
    `${baseUrl}/roster/${config.teamCode}/${config.season}`
  );
}

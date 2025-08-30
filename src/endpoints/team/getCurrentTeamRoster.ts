import { DEFAULT_BASE_URL_V1 } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import { CurrentRosterResponse } from '../../types/currentRoster';
import { TeamTriCode } from '../../types/team';
import { isTeamActive } from '../../utilities/isTeamActive';

/**
 * Configuration options for {@link getCurrentTeamRoster}.
 */
export interface GetCurrentTeamRosterConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** 3-letter team code (the triCode) (e.g., "FLA" for Florida Panthers or "NYR" for New York Rangers). */
  teamCode: TeamTriCode;
}

/**
 * Fetches the current NHL roster for a given team.
 *
 * Validates that the provided team code corresponds to an active NHL team.
 * If the team is inactive (e.g., defunct or relocated), this function throws an error.
 *
 * @param {GetCurrentTeamRosterConfig} config - Configuration object.
 * @param {string} [config.baseUrl] - Optional API base URL to override the default.
 * @param {TeamTriCode} config.teamCode - The team's 3-letter code (triCode).
 *
 * @returns {Promise<CurrentRosterResponse>} A promise resolving to the current roster data.
 *
 * @throws {Error} If the provided `teamCode` does not correspond to an active team.
 *
 * @example
 * ```ts
 * const roster = await getCurrentRosterForTeam({ teamCode: "FLA" });
 * console.log(roster.players); // Array of players on the Florida Panthers
 * ```
 *
 * @example
 * ```ts
 * // Using a custom base URL (for tests or mock servers)
 * const roster = await getCurrentRosterForTeam({
 *   teamCode: "NYR",
 *   baseUrl: "http://localhost:4000/mock-api"
 * });
 * ```
 */
export function getCurrentTeamRoster(
  config: GetCurrentTeamRosterConfig
): Promise<CurrentRosterResponse> {
  if (!isTeamActive(config.teamCode)) {
    throw Error(
      'Team abbreviation provided is not a currently active team, so it does not have a current roster.'
    );
  }

  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;
  return fetchJson<CurrentRosterResponse>(
    `${baseUrl}/roster/${config.teamCode}/current`
  );
}

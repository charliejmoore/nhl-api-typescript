import { DEFAULT_BASE_URL_STATS } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import type { TeamListResponse } from '../../types/team';

/**
 * Configuration options for {@link getAllNHLTeams}.
 */
export interface GetAllNHLTeamsConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** Language you want results in. ISO language code https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes. Defaults to `"en"`.*/
  language?: string;
}

/**
 * Fetches the list of all NHL teams.
 *
 * Allows overriding the API base URL (e.g., for testing) and setting a preferred
 * language for team data. Defaults to English (`"en"`) if no language is provided.
 *
 * @param {GetAllNHLTeamsConfig} [config] - Optional configuration object.
 * @param {string} [config.baseUrl] - Optional API base URL override.
 * @param {string} [config.language="en"] - ISO 639 language code for results (defaults to `"en"`).
 *
 * @returns {Promise<TeamListResponse>} A promise resolving to a list of NHL teams.
 *
 * @example
 * ```ts
 * const teams = await getAllNHLTeams();
 * console.log(teams); // All NHL teams in English
 * ```
 *
 * @example
 * ```ts
 * const teamsFr = await getAllNHLTeams({ language: "fr" });
 * console.log(teamsFr); // All NHL teams with French localization
 * ```
 *
 * @example
 * ```ts
 * const teamsMock = await getAllNHLTeams({
 *   baseUrl: "http://localhost:4000/mock-api",
 *   language: "en"
 * });
 * ```
 */
export function getAllNHLTeams(
  config?: GetAllNHLTeamsConfig
): Promise<TeamListResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_STATS;
  const language = config?.language || 'en';
  return fetchJson<TeamListResponse>(`${baseUrl}/${language}/team`);
}

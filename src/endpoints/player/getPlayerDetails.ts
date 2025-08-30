import { DEFAULT_BASE_URL_V1 } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import { PlayerDetailsResponse } from '../../types';

/**
 * Configuration options for {@link getPlayerDetails}.
 */
export interface GetPlayerDetailsConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** The player's unique NHL ID. E.g., `8478402` for Connor McDavid. */
  playerId: number;
}

/**
 * Fetches detailed information for a specific NHL player.
 *
 * Retrieves the player's profile, stats, and other landing-page data from the NHL API.
 *
 * @param {GetPlayerDetailsConfig} config - Configuration object.
 * @param {string} [config.baseUrl] - Optional API base URL override (defaults to `DEFAULT_BASE_URL_V1`).
 * @param {number} config.playerId - The player's unique NHL ID.
 *
 * @returns {Promise<PlayerDetailsResponse>} A promise resolving to the player's details.
 *
 * @example
 * ```ts
 * const mcdavid = await getPlayerDetails({ playerId: 8478402 });
 * console.log(mcdavid.person.fullName); // "Connor McDavid"
 * ```
 *
 * @example
 * ```ts
 * // With a custom/mock base URL
 * const player = await getPlayerDetails({
 *   playerId: 8478402,
 *   baseUrl: "http://localhost:4000/mock-api"
 * });
 * ```
 */
export function getPlayerDetails(
  config: GetPlayerDetailsConfig
): Promise<PlayerDetailsResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;
  return fetchJson<PlayerDetailsResponse>(
    `${baseUrl}/player/${config.playerId}/landing`
  );
}

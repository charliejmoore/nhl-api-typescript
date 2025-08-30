import { DEFAULT_BASE_URL_V1 } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import { PlayerGameLogBySeasonResponse } from '../../types';
import { GameType } from '../../types/shared';

export interface GetPlayerGameLogBySeasonConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** The player's unique NHL ID. E.g., `8478402` for Connor McDavid.*/
  playerId: number;
  /** A number like 20242025 for the 2024-2025 season. */
  season: number;
  /** The type of games to fetch logs for. */
  gameType: GameType;
}

/**
 * Fetches a player's game log for a given season.
 *
 * Retrieves per-game performance data (goals, assists, ice time, etc.) for
 * the specified player, season, and game type.
 *
 * @param {GetPlayerGameLogBySeasonConfig} config - Configuration object.
 * @param {string} [config.baseUrl] - Optional API base URL override (defaults to `DEFAULT_BASE_URL_V1`).
 * @param {number} config.playerId - Unique NHL player ID.
 * @param {number} config.season - Season identifier (e.g., `20242025`).
 * @param {GameType} config.gameType - Game type (regular season, playoffs, etc.).
 *
 * @returns {Promise<PlayerGameLogBySeasonResponse>} A promise resolving to the player's game log for the given season.
 *
 * @example
 * ```ts
 * const log = await getPlayerGameLogBySeason({
 *   playerId: 8478402, // Connor McDavid
 *   season: 20242025,
 *   gameType: "R"
 * });
 * console.log(log.games[0]); // First game of the season
 * ```
 *
 * @example
 * ```ts
 * // Fetch playoff logs for a player
 * const playoffLog = await getPlayerGameLogBySeason({
 *   playerId: 8478402,
 *   season: 20242025,
 *   gameType: "P"
 * });
 * ```
 *
 * @example
 * ```ts
 * // With a custom base URL (useful for testing)
 * const mockLog = await getPlayerGameLogBySeason({
 *   baseUrl: "http://localhost:4000/mock-api",
 *   playerId: 8478402,
 *   season: 20242025,
 *   gameType: "R"
 * });
 * ```
 */
export function getPlayerGameLogBySeason(
  config: GetPlayerGameLogBySeasonConfig
): Promise<PlayerGameLogBySeasonResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;
  return fetchJson<PlayerGameLogBySeasonResponse>(
    `${baseUrl}/player/${config.playerId}/game-log/${config.season}/${config.gameType}`
  );
}

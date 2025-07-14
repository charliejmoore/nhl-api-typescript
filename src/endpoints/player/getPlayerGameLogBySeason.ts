import { DEFAULT_BASE_URL_V1 } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import { PlayerGameLogBySeasonResponse } from '../../types';
import { GameType } from '../../types/shared';

export interface GetPlayerGameLogBySeasonConfig {
  baseUrl?: string;
  playerId: number;
  /** A number like 20242025 for the 2024-2025 season. */
  season: number;
  gameType: GameType;
}

export function getPlayerGameLogBySeason(
  config: GetPlayerGameLogBySeasonConfig
): Promise<PlayerGameLogBySeasonResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;
  return fetchJson<PlayerGameLogBySeasonResponse>(
    `${baseUrl}/player/${config.playerId}/game-log/${config.season}/${config.gameType}`
  );
}

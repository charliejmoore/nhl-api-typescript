import { DEFAULT_BASE_URL_V1 } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import { PlayerDetailsResponse } from '../../types';

export interface GetPlayerDetailsConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** The player's unique NHL ID. */
  playerId: number;
}

export function getPlayerDetails(
  config: GetPlayerDetailsConfig
): Promise<PlayerDetailsResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;
  return fetchJson<PlayerDetailsResponse>(
    `${baseUrl}/player/${config.playerId}/landing`
  );
}

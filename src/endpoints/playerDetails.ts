import { DEFAULT_BASE_URL_V1 } from '../constants';
import { fetchJson } from '../http/fetchJson';
import { PlayerDetailsResponse } from '../types/';

export interface GetPlayerDetailsConfig {
  baseUrl?: string;
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

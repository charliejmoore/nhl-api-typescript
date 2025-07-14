import { DEFAULT_BASE_URL_STATS } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import type { TeamListResponse } from '../../types/team';

export interface GetAllHLTeamsConfig {
  baseUrl?: string;
  language?: string;
}

export function getAllHLTeams(
  config?: GetAllHLTeamsConfig
): Promise<TeamListResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_STATS;
  const language = config?.language || 'en';
  return fetchJson<TeamListResponse>(`${baseUrl}/${language}/team`);
}

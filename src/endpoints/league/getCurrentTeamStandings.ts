import { DEFAULT_BASE_URL_V1 } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import { CurrentTeamStandingsResponse } from '../../types';

export interface GetCurrentTeamStandingsConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
}

export function getCurrentTeamStandings(
  config: GetCurrentTeamStandingsConfig
): Promise<CurrentTeamStandingsResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;
  return fetchJson<CurrentTeamStandingsResponse>(`${baseUrl}/standings/now`);
}

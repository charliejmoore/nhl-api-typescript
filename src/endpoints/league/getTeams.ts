import { DEFAULT_BASE_URL_STATS } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import type { TeamListResponse } from '../../types/team';

export interface GetAllNHLTeamsConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** Language you want results in. ISO language code https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes. */
  language?: string;
}

export function getAllNHLTeams(
  config?: GetAllNHLTeamsConfig
): Promise<TeamListResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_STATS;
  const language = config?.language || 'en';
  return fetchJson<TeamListResponse>(`${baseUrl}/${language}/team`);
}

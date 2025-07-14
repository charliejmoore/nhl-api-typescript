import { DEFAULT_BASE_URL_V1 } from '../../../constants';
import { fetchJson } from '../../../http/fetchJson';
import {
  CurrentSkaterStatLeadersResponse,
  SkaterStatLeaderCategory,
} from '../../../types';

export interface GetCurrentSkaterStatLeadersConfig {
  baseUrl?: string;
  /** Categories you want to see stat leaders in. These are ORs not ANDs, so you will see a list of top "goals" and a list of top "assists" separately if you give those two categories. */
  categories?: SkaterStatLeaderCategory[];
  /** -1 will return all results. */
  limit?: number;
}

export function getCurrentSkaterStatLeaders(
  config: GetCurrentSkaterStatLeadersConfig
): Promise<CurrentSkaterStatLeadersResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;

  let url = `${baseUrl}/skater-stats-leaders/current`;

  if (config?.categories) {
    url += `?categories=${config.categories.join(',')}`;
  }

  if (config?.limit) {
    if (config?.categories) {
      url += `&limit=${config.limit}`;
    } else {
      url += `?limit=${config.limit}`;
    }
  }

  console.log('url: ', url);
  return fetchJson<CurrentSkaterStatLeadersResponse>(url);
}

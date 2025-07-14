import { DEFAULT_BASE_URL_V1 } from '../../../constants';
import { fetchJson } from '../../../http/fetchJson';
import {
  CurrentGoalieStatLeadersResponse,
  GoalieStatLeaderCategory,
} from '../../../types';

export interface GetCurrentGoalieStatLeadersConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** Categories you want to see stat leaders in. These are ORs not ANDs, so you will see a list of top "goals" and a list of top "assists" separately if you give those two categories. */
  categories?: GoalieStatLeaderCategory[];
  /** -1 will return all results. */
  limit?: number;
}

export function getCurrentGoalieStatLeaders(
  config: GetCurrentGoalieStatLeadersConfig
): Promise<CurrentGoalieStatLeadersResponse> {
  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;

  let url = `${baseUrl}/goalie-stats-leaders/current`;

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

  return fetchJson<CurrentGoalieStatLeadersResponse>(url);
}

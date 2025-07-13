import {
  getAllHLTeams,
  getCurrentRosterForTeam,
  getPlayerDetails,
} from './endpoints';
import { TeamTriCode } from './types';

export interface NHLApiClientConfig {
  baseUrl?: string;
  language?: string;
}

export function createNHLApiClient(config: NHLApiClientConfig = {}) {
  return {
    getAllNHLTeams: () => getAllHLTeams(config),
    getCurrentRosterForTeam: (teamCode: TeamTriCode) =>
      getCurrentRosterForTeam({ baseUrl: config?.baseUrl, teamCode }),
    getPlayerDetails: (playerId: number) =>
      getPlayerDetails({ playerId, baseUrl: config?.baseUrl }),
  };
}

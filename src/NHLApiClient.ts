import { getCurrentRosterForTeam } from './endpoints/currentRosterForTeam';
import { getAllHLTeams } from './endpoints/teams';
import { TeamTriCode } from './types/team';

export interface NHLApiClientConfig {
  baseUrl?: string;
  language?: string;
}

export function createNHLApiClient(config: NHLApiClientConfig = {}) {
  return {
    getAllNHLTeams: () => getAllHLTeams(config),
    getCurrentRosterForTeam: (teamCode: TeamTriCode) =>
      getCurrentRosterForTeam({ baseUrl: config?.baseUrl, teamCode }),
  };
}

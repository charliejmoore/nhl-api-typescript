import {
  getAllHLTeams,
  getCurrentRosterForTeam,
  getPlayerDetails,
  getPlayerGameLogBySeason,
} from './endpoints';
import { TeamTriCode } from './types';
import { GameType } from './types/shared';

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
    getPlayerGameLogBySeason: (
      playerId: number,
      season: number,
      gameType: GameType
    ) =>
      getPlayerGameLogBySeason({
        baseUrl: config?.baseUrl,
        playerId,
        season,
        gameType,
      }),
  };
}

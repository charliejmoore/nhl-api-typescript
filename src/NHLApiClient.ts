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
  /** Some NHL endpoints support languages other than English. */
  language?: string;
}

export function createNHLApiClient(config: NHLApiClientConfig = {}) {
  return {
    getAllNHLTeams: () =>
      getAllHLTeams({ language: config.language, baseUrl: config?.baseUrl }),
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

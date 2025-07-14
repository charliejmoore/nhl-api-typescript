import {
  getAllHLTeams,
  getCurrentRosterForTeam,
  getCurrentSkaterStatLeaders,
  GetCurrentSkaterStatLeadersConfig,
  getPlayerDetails,
  getPlayerGameLogBySeason,
} from './endpoints';
import { TeamTriCode } from './types';
import { GameType } from './types/shared';

export interface NHLApiClientConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** Some NHL endpoints support languages other than English. */
  language?: string;
}

export function createNHLApiClient(config: NHLApiClientConfig = {}) {
  return {
    /** League */
    getAllNHLTeams: () =>
      getAllHLTeams({ language: config.language, baseUrl: config?.baseUrl }),

    /** Teams */
    getCurrentRosterForTeam: (teamCode: TeamTriCode) =>
      getCurrentRosterForTeam({ baseUrl: config?.baseUrl, teamCode }),

    /** Players */
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

    getCurrentSkaterStatLeaders: ({
      categories,
      limit,
    }: GetCurrentSkaterStatLeadersConfig) =>
      getCurrentSkaterStatLeaders({
        baseUrl: config?.baseUrl,
        limit,
        categories,
      }),
  };
}

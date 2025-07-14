import {
  getAllHLTeams,
  getCurrentRosterForTeam,
  getCurrentSkaterStatLeaders,
  GetCurrentSkaterStatLeadersConfig,
  getPlayerDetails,
  getPlayerGameLogBySeason,
  getCurrentTeamStandings,
} from './endpoints';
import {
  getCurrentGoalieStatLeaders,
  GetCurrentGoalieStatLeadersConfig,
} from './endpoints/player/goalies/getGoalieStatLeaders';
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

    getCurrentTeamStandings: () =>
      getCurrentTeamStandings({ baseUrl: config?.baseUrl }),

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

    getCurrentGoalieStatLeaders: ({
      categories,
      limit,
    }: GetCurrentGoalieStatLeadersConfig) => {
      getCurrentGoalieStatLeaders({
        baseUrl: config?.baseUrl,
        categories,
        limit,
      });
    },
  };
}

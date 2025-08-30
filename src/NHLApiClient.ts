import {
  getAllNHLTeams,
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
import {
  CurrentGoalieStatLeadersResponse,
  CurrentRosterResponse,
  CurrentSkaterStatLeadersResponse,
  CurrentTeamStandingsResponse,
  PlayerDetailsResponse,
  PlayerGameLogBySeasonResponse,
  TeamListResponse,
  TeamTriCode,
} from './types';
import { GameType } from './types/shared';

export interface NHLApiClientConfig {
  /** Override API base URL (for testing, etc.) */
  baseUrl?: string;
  /** Some NHL endpoints support languages other than English. */
  language?: string;
}

export interface NHLApiClient {
  getAllNHLTeams: () => Promise<TeamListResponse>;
  getCurrentTeamStandings: () => Promise<CurrentTeamStandingsResponse>;
  getCurrentRosterForTeam: (
    teamCode: TeamTriCode
  ) => Promise<CurrentRosterResponse>;
  getPlayerDetails: (playerId: number) => Promise<PlayerDetailsResponse>;
  getPlayerGameLogBySeason: (
    playerId: number,
    season: number,
    gameType: GameType
  ) => Promise<PlayerGameLogBySeasonResponse>;
  getCurrentSkaterStatLeaders: (
    categories,
    limit
  ) => Promise<CurrentSkaterStatLeadersResponse>;
  getCurrentGoalieStatLeaders: (
    categories,
    limit
  ) => Promise<CurrentGoalieStatLeadersResponse>;
}

export function createNHLApiClient(
  config: NHLApiClientConfig = {}
): NHLApiClient {
  return {
    /** League */
    getAllNHLTeams: (): Promise<TeamListResponse> =>
      getAllNHLTeams({ language: config.language, baseUrl: config?.baseUrl }),

    getCurrentTeamStandings: (): Promise<CurrentTeamStandingsResponse> =>
      getCurrentTeamStandings({ baseUrl: config?.baseUrl }),

    /** Teams */
    getCurrentRosterForTeam: (
      teamCode: TeamTriCode
    ): Promise<CurrentRosterResponse> =>
      getCurrentRosterForTeam({ baseUrl: config?.baseUrl, teamCode }),

    /** Players */
    getPlayerDetails: (playerId: number): Promise<PlayerDetailsResponse> =>
      getPlayerDetails({ playerId, baseUrl: config?.baseUrl }),

    getPlayerGameLogBySeason: (
      playerId: number,
      season: number,
      gameType: GameType
    ): Promise<PlayerGameLogBySeasonResponse> =>
      getPlayerGameLogBySeason({
        baseUrl: config?.baseUrl,
        playerId,
        season,
        gameType,
      }),

    getCurrentSkaterStatLeaders: ({
      categories,
      limit,
    }: GetCurrentSkaterStatLeadersConfig): Promise<CurrentSkaterStatLeadersResponse> =>
      getCurrentSkaterStatLeaders({
        baseUrl: config?.baseUrl,
        limit,
        categories,
      }),

    getCurrentGoalieStatLeaders: ({
      categories,
      limit,
    }: GetCurrentGoalieStatLeadersConfig): Promise<CurrentGoalieStatLeadersResponse> =>
      getCurrentGoalieStatLeaders({
        baseUrl: config?.baseUrl,
        categories,
        limit,
      }),
  };
}

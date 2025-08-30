import {
  getAllNHLTeams,
  getCurrentTeamRoster,
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
  /**
   * Fetches the list of all NHL teams.
   * Allows overriding the API base URL (e.g., for testing) and setting a preferred
   * language for team data. Defaults to English (`"en"`) if no language is provided.
   * @memberof NHLApiClient
   */
  getAllNHLTeams: () => Promise<TeamListResponse>;
  /**
   * Fetches the current NHL team standings.
   * Retrieves the latest league standings snapshot (e.g., division, conference,
   * and league-wide rankings) from the NHL API.
   * The endpoint returns standings as they are **right now**.
   * @memberof NHLApiClient
   */
  getCurrentTeamStandings: () => Promise<CurrentTeamStandingsResponse>;
  /**
   * Fetches the current NHL roster for a given team.
   *
   * Validates that the provided team code corresponds to an active NHL team.
   * If the team is inactive (e.g., defunct or relocated), this function throws an error.
   * @memberof NHLApiClient
   */
  getCurrentTeamRoster: (
    teamCode: TeamTriCode
  ) => Promise<CurrentRosterResponse>;
  /**
   * Fetches detailed information for a specific NHL player.
   * Retrieves the player's profile, stats, and other landing-page data from the NHL API.
   * @memberof NHLApiClient
   */
  getPlayerDetails: (playerId: number) => Promise<PlayerDetailsResponse>;
  /**
   * Fetches a player's game log for a given season.
   * Retrieves per-game performance data (goals, assists, ice time, etc.) for
   * the specified player, season, and game type.
   * @memberof NHLApiClient
   */
  getPlayerGameLogBySeason: (
    playerId: number,
    season: number,
    gameType: GameType
  ) => Promise<PlayerGameLogBySeasonResponse>;
  /**
   * Fetches the current NHL skater stat leaders.
   * Retrieves leaderboard data for one or more skater stat categories.
   * By default, returns top leaders across the entire league for the current season.
   * @memberof NHLApiClient
   */
  getCurrentSkaterStatLeaders: (
    categories,
    limit
  ) => Promise<CurrentSkaterStatLeadersResponse>;
  /**
   * Fetches the current NHL goalie stat leaders.
   * Retrieves leaderboard data for one or more goalie stat categories.
   * By default, returns top leaders across the entire league for the current season.
   * @memberof NHLApiClient
   */
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
    getCurrentTeamRoster: (
      teamCode: TeamTriCode
    ): Promise<CurrentRosterResponse> =>
      getCurrentTeamRoster({ baseUrl: config?.baseUrl, teamCode }),

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

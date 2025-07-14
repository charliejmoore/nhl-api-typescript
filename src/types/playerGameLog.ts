import { GameType, HomeRoadFlag, LocalizedString } from './shared';
import { TeamTriCode } from './team';

/** Representation of a single NHL player's game log entry for a season. */
export interface PlayerGameLogEntry {
  /** Unique identifier for the NHL game. */
  gameId: number;
  /** Abbreviation for the player's team in this game (e.g., "DET"). */
  teamAbbrev: TeamTriCode;
  /** "H" for home, "R" for road/away. */
  homeRoadFlag: HomeRoadFlag;
  /** Game date (YYYY-MM-DD). */
  gameDate: string;
  /** Number of goals the player scored in the game. */
  goals: number;
  /** Number of assists the player had in the game. */
  assists: number;
  /** Team common name for the player's team (localized). E.g., "Maple Leafs", "Blues". */
  commonName: LocalizedString;
  /** Team common name for the opponent (localized). E.g., "Hurricanes", "Panthers". */
  opponentCommonName: LocalizedString;
  /** Total points (goals + assists) the player earned in the game. */
  points: number;
  /** Player's plus-minus rating for the game. */
  plusMinus: number;
  /** Number of power play goals the player scored in the game. */
  powerPlayGoals: number;
  /** Number of power play points the player earned in the game. */
  powerPlayPoints: number;
  /** Number of game-winning goals the player scored in the game. */
  gameWinningGoals: number;
  /** Number of overtime goals the player scored in the game. */
  otGoals: number;
  /** Number of shots the player took in the game. */
  shots: number;
  /** Number of shifts the player played in the game. */
  shifts: number;
  /** Number of shorthanded goals the player scored in the game. */
  shorthandedGoals: number;
  /** Number of shorthanded points the player earned in the game. */
  shorthandedPoints: number;
  /** Abbreviation for the opponent team (e.g., "TOR"). */
  opponentAbbrev: TeamTriCode;
  /** Penalty minutes the player earned in the game. */
  pim: number;
  /** Time the player spent on ice (mm:ss) during this game. */
  toi: string;
}

/** Information about which seasons and game types are included in the log. */
export interface PlayerStatsSeasonSummary {
  /** NHL season (e.g., 20242025). */
  season: number;
  /** Array of NHL game type IDs included for this season (e.g., [2] for regular season). */
  gameTypes: GameType[];
}

/** Complete NHL player game log for a specific season. The shape of the data returned from https://api-web.nhle.com/v1/player/${playerId}/game-log/${season}/${gameType}. */
export interface PlayerGameLogBySeasonResponse {
  /** The NHL season for this log (e.g., 20242025). */
  seasonId: number;
  /** NHL game type ID for these games (e.g., 2 = regular season). */
  gameTypeId: GameType;
  /** Season/gameType summary info for which seasons/gameTypes are present. */
  playerStatsSeasons: PlayerStatsSeasonSummary[];
  /** All game log entries for this player for the given season. */
  gameLog: PlayerGameLogEntry[];
}

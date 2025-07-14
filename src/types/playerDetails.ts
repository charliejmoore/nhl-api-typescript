import {
  LocalizedString,
  HockeyPositionCode,
  Shoots,
  Catches,
  GameType,
} from './shared';
import { HomeRoadFlag } from './shared/homeRoad';
import { TeamTriCode } from './team';

/** NHL player draft details. */
export interface DraftDetails {
  /** Draft year (e.g., 2009). */
  year: number;
  /** Team tricode abbreviation for drafting team (e.g., COL). */
  teamAbbrev: TeamTriCode;
  /** Draft round (e.g., 4). */
  round: number;
  /** Pick number within the round. */
  pickInRound: number;
  /** Overall pick number. */
  overallPick: number;
}

/** Season/career stat line for regular season or playoffs. */
export interface PlayerStatLine {
  /** Number of assists the player had. */
  assists: number;
  /** Number of goals the player made */
  goals: number;
  /** Number of games the player played in. */
  gamesPlayed: number;
  /** Number of points (assists + goals) the player earned. */
  points: number;
  /** Penalty Infraction Minutes. */
  pim: number;
  /** Plus/minus metric. Calculated by subtracting the total number of goals allowed by a player's team while the player is on the ice (at even strength or on the power play) from the total number of goals scored by the player's team while the player is on the ice (at even strength or short-handed). */
  plusMinus: number;
  /** Number of shots the player took. A shot is counted if the following criteria are met: (1) player shoots the puck with the intention of scoring, (2) shot would have gone in if the goalie hadn't blocked it.*/
  shots: number;
  /** Number of power play goals (PPG) the player made. */
  powerPlayGoals?: number;
  /** Number of power play points (goals + assists) the player earned. */
  powerPlayPoints?: number;
  /** Number of shorthanded goals (SHG) the player made. */
  shorthandedGoals?: number;
  /** Number of shorthanded points (goals + assists) the player earned. */
  shorthandedPoints?: number;
  /** The number of goals the player scored divided by their number of shots taken. */
  shootingPctg?: number;
  /** Number of overtime goals the player scored. */
  otGoals?: number;
  /** Number of game winning goals the player scored. */
  gameWinningGoals?: number;
  /** Average time on ice (i.e., "24:14", meaning 24 minutes, 14 seconds.). */
  avgToi?: string;
  /** Player's faceoff win percentage. */
  faceoffWinningPctg?: number;
  sequence?: number;
  /** E.g., "NHL", "OHL", "WJC-20 D1A", etc. */
  leagueAbbrev?: string;
  /** Season (e.g., 20242025 meaning the 2024-2025 season). */
  season?: number;
  /** E.g., "Detroit Red Wings". */
  teamName?: LocalizedString;
  /** E.g., "Red Wings" without the city etc. */
  teamCommonName?: LocalizedString;
  /** E.g., "Detroit". */
  teamPlaceNameWithPreposition?: LocalizedString;
}

/** Player stats for a specific sub-season or career. */
export interface SubSeasonStats {
  assists: number;
  /** Number of goals. */
  goals: number;
  /** Number of games the player played. */
  gamesPlayed: number;
  /** Number of points the player had. */
  points: number;
  /** Penalty Infraction Minutes. */
  pim: number;
  /** Plus/minus metric. Calculated by subtracting the total number of goals allowed by a player's team while the player is on the ice (at even strength or on the power play) from the total number of goals scored by the player's team while the player is on the ice (at even strength or short-handed). */
  plusMinus: number;
  /** Number of shots the player took. A shot is counted if the following criteria are met: (1) player shoots the puck with the intention of scoring, (2) shot would have gone in if the goalie hadn't blocked it.*/
  shots: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  /** The number of goals the player scored divided by their number of shots taken. */
  shootingPctg: number;
  /** Number of overtime goals. */
  otGoals: number;
  /** Number of game winning goals. */
  gameWinningGoals: number;
}

/** Season summary stats. */
export interface SeasonStatSummary {
  subSeason: SubSeasonStats;
  /** Stats totals spanning the player's whole career. */
  career: SubSeasonStats;
}

/** Featured stats by season. */
export interface FeaturedStats {
  /** Season (e.g., 20242025 meaning the 2024-2025 season). */
  season: number;
  /** Regular season stats summary. */
  regularSeason: SeasonStatSummary;
}

/** Player's stat line. Represents one of the last five games. */
export interface LastGameStat {
  /** The number of assists the player made. */
  assists: number;
  /** The date of the game. */
  gameDate: string;
  gameId: number;
  gameTypeId: GameType;
  goals: number;
  /** Whether the game was home or away/road. */
  homeRoadFlag: HomeRoadFlag;
  /** The player's opponent team abbreviation. E.g., "DET". */
  opponentAbbrev: TeamTriCode;
  /** Penalty Infraction Minutes. */
  pim: number;
  /** Plus/minus metric. Calculated by subtracting the total number of goals allowed by a player's team while the player is on the ice (at even strength or on the power play) from the total number of goals scored by the player's team while the player is on the ice (at even strength or short-handed). */
  plusMinus: number;
  /** Number of points the player earned. This is the number of goals + assists they had. */
  points: number;
  /** Number of power play goals. */
  powerPlayGoals: number;
  /** Number of shifts. */
  shifts: number;
  /** Number of shorthanded goals. */
  shorthandedGoals: number;
  /** Number of shots the player took. A shot is counted if the following criteria are met: (1) player shoots the puck with the intention of scoring, (2) shot would have gone in if the goalie hadn't blocked it.*/
  shots: number;
  /** The player's team abbreviation. E.g., "VGK". */
  teamAbbrev: TeamTriCode;
  /** Time on ice (i.e., "24:17" meaning 24 mins 17 seconds). */
  toi: string;
}

/** Season totals (across all leagues/years). */
export interface SeasonTotal extends PlayerStatLine {}

/** Current team roster listing (minimal). */
export interface TeamRosterPlayer {
  playerId: number;
  lastName: LocalizedString;
  firstName: LocalizedString;
  playerSlug: string;
}

/** Career totals, separated by regular season and playoffs. */
export interface CareerTotals {
  regularSeason: PlayerStatLine;
  playoffs: PlayerStatLine;
}

/** Full details for a single NHL player. */
export interface PlayerDetailsResponse {
  /** Unique player ID. */
  playerId: number;
  /** Whether the player is currently active. */
  isActive: boolean;
  /** The player's current team numeric ID. */
  currentTeamId: number;
  /** The player's current team tricode abbreviation (e.g., "DET"). */
  currentTeamAbbrev: TeamTriCode;
  /** Team full name (localized). */
  fullTeamName: LocalizedString;
  /** Team common/short name (localized). */
  teamCommonName: LocalizedString;
  /** Team city/place name (localized, with preposition for French). */
  teamPlaceNameWithPreposition: LocalizedString;
  /** First name (localized). */
  firstName: LocalizedString;
  /** Last name (localized). */
  lastName: LocalizedString;
  /** Badges or awards. */
  badges: string[];
  /** Team logo SVG URL. */
  teamLogo: string;
  /** Player's sweater (jersey) number. */
  sweaterNumber: number;
  /** Position abbreviation (e.g., "D" for defensemen). */
  position: HockeyPositionCode;
  /** Headshot image URL. */
  headshot: string;
  /** Action hero image URL. */
  heroImage: string;
  /** Height (in inches). */
  heightInInches: number;
  /** Height (in centimeters). */
  heightInCentimeters: number;
  /** Weight (in pounds). */
  weightInPounds: number;
  /** Weight (in kilograms). */
  weightInKilograms: number;
  /** Birth date (YYYY-MM-DD). */
  birthDate: string;
  /** Birth city (localized). */
  birthCity: LocalizedString;
  /** Birth state/province (localized). */
  birthStateProvince: LocalizedString;
  /** Birth country (ISO code, e.g., "CAN"). */
  birthCountry: string;
  /** Shooting/catching hand ("L" or "R"). */
  shootsCatches: Shoots | Catches;
  /** NHL draft details. */
  draftDetails: DraftDetails;
  /** URL-friendly player slug (e.g., "ben-chiarot-8475279"). */
  playerSlug: string;
  /** 1 if in top 100 all time, else 0. */
  inTop100AllTime: number;
  /** 1 if in Hockey Hall of Fame, else 0. */
  inHHOF: number;
  /** Stats featured on profile (current season + career). */
  featuredStats: FeaturedStats;
  /** Career totals (regular season & playoffs). */
  careerTotals: CareerTotals;
  /** Team shop link. */
  shopLink: string;
  /** Twitter profile link. */
  twitterLink: string;
  /** Video highlights/watch link. */
  watchLink: string;
  /** Last 5 games (chronological order). */
  last5Games: LastGameStat[];
  /** Season totals, for all known seasons/leagues (junior, minor, pro). */
  seasonTotals: SeasonTotal[];
  /** The current full roster of this player's current NHL team. */
  currentTeamRoster: TeamRosterPlayer[];
}

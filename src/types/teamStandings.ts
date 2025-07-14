import { GameType, LocalizedString } from './shared';
import {
  ConferenceAbbreviation,
  ConferenceName,
  DivisionAbbreviation,
  DivisionName,
} from './shared/league';
import { TeamTriCode } from './team';

export interface CurrentTeamStandingsResponse {
  wildCardIndicator: boolean;
  /** Standings as of this time. Formatted "2025-07-14T14:28:05Z" */
  standingsDateTimeUtc: string;
  /** List of all teams in standing order. */
  standings: TeamStandingEntry[];
}

export type ClinchIndicator =
  /** Presidents' Trophy. */
  | 'p'
  /** Clinched playoff spot*/
  | 'x'
  /** Clinched Conference */
  | 'z'
  /** Clinched Division*/
  | 'y'
  /** Eliminated from playoff contention. */
  | 'e';

/** NHL team standing or stat snapshot for a single date/season. */
export interface TeamStandingEntry {
  /** Team playoff clinch indicator (e.g., 'p' for playoff clinched). */
  clinchIndicator: ClinchIndicator;
  /** Conference abbreviation (e.g., 'W' for Western). */
  conferenceAbbrev: ConferenceAbbreviation;
  /** Team's home sequence in conference. */
  conferenceHomeSequence: number;
  /** Team's last 10 games sequence in conference. */
  conferenceL10Sequence: number;
  /** Conference name (e.g., 'Western'). */
  conferenceName: ConferenceName;
  /** Team's road sequence in conference. */
  conferenceRoadSequence: number;
  /** Team's overall sequence in conference. */
  conferenceSequence: number;
  /** Date for these stats (YYYY-MM-DD). */
  date: string;
  /** Division abbreviation (e.g., 'C' for Central). */
  divisionAbbrev: DivisionAbbreviation;
  /** Team's home sequence in division. */
  divisionHomeSequence: number;
  /** Team's last 10 games sequence in division. */
  divisionL10Sequence: number;
  /** Division name (e.g., 'Central'). */
  divisionName: DivisionName;
  /** Team's road sequence in division. */
  divisionRoadSequence: number;
  /** Team's overall sequence in division. */
  divisionSequence: number;
  /** NHL game type (e.g., 2 for regular season). */
  gameTypeId: GameType;
  /** Total number of games played. */
  gamesPlayed: number;
  /** Goal differential (goals for minus goals against). Note: goals scored into an empty net do not count against the goaltender that was pulled. As a result, the league average goal differential may be above zero. See https://edge.nhl.com/en/glossary. */
  goalDifferential: number;
  /** Goal differential percentage. */
  goalDifferentialPctg: number;
  /** Total goals allowed by a goaltender on the ice. */
  goalAgainst: number;
  /** Total number of goals the team scored. */
  goalFor: number;
  /** Goals for percentage. */
  goalsForPctg: number;
  /** Total home games played. */
  homeGamesPlayed: number;
  /** Home goal differential. */
  homeGoalDifferential: number;
  /** Home goals against. */
  homeGoalsAgainst: number;
  /** Number of goals scored at home. */
  homeGoalsFor: number;
  /** Home losses. */
  homeLosses: number;
  /** Home overtime losses. */
  homeOtLosses: number;
  /** Home points earned. */
  homePoints: number;
  /** Home regulation plus OT wins. */
  homeRegulationPlusOtWins: number;
  /** Home regulation wins. */
  homeRegulationWins: number;
  /** Home ties (rare/legacy). */
  homeTies: number;
  /** Home wins. */
  homeWins: number;
  /** Last 10 games played. */
  l10GamesPlayed: number;
  /** Last 10 goal differential. */
  l10GoalDifferential: number;
  /** Last 10 goals against. */
  l10GoalsAgainst: number;
  /** Last 10 goals for. */
  l10GoalsFor: number;
  /** Last 10 losses. */
  l10Losses: number;
  /** Last 10 overtime losses. */
  l10OtLosses: number;
  /** Last 10 points. */
  l10Points: number;
  /** Last 10 regulation plus OT wins. */
  l10RegulationPlusOtWins: number;
  /** Last 10 regulation wins. */
  l10RegulationWins: number;
  /** Last 10 ties. */
  l10Ties: number;
  /** Last 10 wins. */
  l10Wins: number;
  /** League home sequence. */
  leagueHomeSequence: number;
  /** League last 10 sequence. */
  leagueL10Sequence: number;
  /** League road sequence. */
  leagueRoadSequence: number;
  /** League overall sequence. */
  leagueSequence: number;
  /** Number of losses (overall). */
  losses: number;
  /** Number of overtime losses. */
  otLosses: number;
  /** Team city/place name (localized). E.g., "Washington". */
  placeName: LocalizedString;
  /** Points percentage. The total number of points earned from game outcomes for the team divided by the total amount of possible points the team could've earned had they won all their games. Used to normalize stats between teams who may not have had the opportunity to play the same number of games. */
  pointPctg: number;
  /** Total points the team earned from game outcomes.Win (2 point), loss (0 point) and overtime/shootout loss (1 point) */
  points: number;
  /** Regulation plus OT win percentage. */
  regulationPlusOtWinPctg: number;
  /** Regulation plus OT wins. */
  regulationPlusOtWins: number;
  /** Regulation win percentage. */
  regulationWinPctg: number;
  /** Regulation wins. */
  regulationWins: number;
  /** Road games played. */
  roadGamesPlayed: number;
  /** Road goal differential. */
  roadGoalDifferential: number;
  /** Road goals against. */
  roadGoalsAgainst: number;
  /** Number of goals scored on the road. */
  roadGoalsFor: number;
  /** Road losses. */
  roadLosses: number;
  /** Road overtime losses. */
  roadOtLosses: number;
  /** Road points. */
  roadPoints: number;
  /** Road regulation plus OT wins. */
  roadRegulationPlusOtWins: number;
  /** Road regulation wins. */
  roadRegulationWins: number;
  /** Road ties. */
  roadTies: number;
  /** Road wins. */
  roadWins: number;
  /** NHL season (e.g., 20242025). */
  seasonId: number;
  /** Shootout losses. */
  shootoutLosses: number;
  /** Shootout wins. */
  shootoutWins: number;
  /** Win/loss streak code (e.g., "W" or "L"). */
  streakCode: string;
  /** Number of games in current streak. */
  streakCount: number;
  /** Team name (localized). E.g., "Vegas Golden Knights" */
  teamName: LocalizedString;
  /** Team common name (localized). E.g., "Golden Knights". */
  teamCommonName: LocalizedString;
  /** Team abbreviation.*/
  teamAbbrev: {
    default: TeamTriCode;
  };
  /** URL for the team logo SVG. */
  teamLogo: string;
  /** Ties (overall). */
  ties: number;
  /** Waivers sequence number. */
  waiversSequence: number;
  /** Wildcard sequence number. */
  wildcardSequence: number;
  /** Win percentage. */
  winPctg: number;
  /** Total wins. */
  wins: number;
}

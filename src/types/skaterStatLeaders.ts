import { HockeyPositionCode, LocalizedString } from './shared';
import { TeamTriCode } from './team';

/** Shape of data returned from `https://api-web.nhle.com/v1/skater-stats-leaders/current`. */
export interface CurrentSkaterStatLeadersResponse {
  /** List of current leaders in short handed goals. */
  goalsSh?: CurrentSkaterStatLeader[];
  /** List of current leaders in plus minus stat. */
  plusMinus?: CurrentSkaterStatLeader[];
  /** List of current leaders in assists. */
  assists?: CurrentSkaterStatLeader[];
  /** List of current leaders in power play goals. */
  goalsPp?: CurrentSkaterStatLeader[];
  /** List of current leaders in faceoff wins. */
  faceoffLeaders?: CurrentSkaterStatLeader[];
  /** List of current leaders in penalty mins. */
  penaltyMins?: CurrentSkaterStatLeader[];
  /** List of current leaders in goals. */
  goals?: CurrentSkaterStatLeader[];
  /** List of current leaders in points. */
  points?: CurrentSkaterStatLeader[];
  /** List of current leaders in time on ice. */
  toi?: CurrentSkaterStatLeader[];
}

/** Hockey statistics categories available for skater leader ranking. */
export type SkaterStatLeaderCategory = keyof CurrentSkaterStatLeadersResponse;

/** Individual player in the stat leader results. */
export interface CurrentSkaterStatLeader {
  /** Unique identifier. */
  id: number;
  /** The player's first name. */
  firstName: LocalizedString;
  /** The player's last name. */
  lastName: LocalizedString;
  /** Player's sweater (jersey) number. */
  sweaterNumber: number;
  /** URL to NHL image png asset. */
  headshot: string;
  /** The abbreviation for the player's team (e.g., "BOS"). */
  teamAbbrev: TeamTriCode;
  /** E.g., "Rangers", "Golden Knights". */
  teamName: LocalizedString;
  /** URL to NHL logo svg asset. */
  teamLogo: string;
  /** The player's position. */
  position: HockeyPositionCode;
  /** Value of the statistic. For faceoffLeaders this is a percentage; penaltyMins time in minutes; toi time on ice in minutes. */
  value: number;
}

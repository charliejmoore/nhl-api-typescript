import { HockeyPositionCode, LocalizedString } from './shared';
import { TeamTriCode } from './team';

export interface CurrentSkaterStatLeadersResponse {
  /** List of leaders in short handed goals. */
  goalsSh?: CurrentSkaterStatLeader[];
  /** List of leaders in plus minus stat. */
  plusMinus?: CurrentSkaterStatLeader[];
  /** List of leaders in assists. */
  assists?: CurrentSkaterStatLeader[];
  /** List of leaders in power play goals. */
  goalsPp?: CurrentSkaterStatLeader[];
  /** List of leaders in faceoff wins. */
  faceoffLeaders?: CurrentSkaterStatLeader[];
  /** List of leaders in penalty mins. */
  penaltyMins?: CurrentSkaterStatLeader[];
  /** List of leaders in goals. */
  goals?: CurrentSkaterStatLeader[];
  /** List of leaders in points. */
  points?: CurrentSkaterStatLeader[];
  /** List of leaders in time on ice. */
  toi?: CurrentSkaterStatLeader[];
}

/** Hockey statistics categories available for skater leader ranking. */
export type SkaterStatLeaderCategory = keyof CurrentSkaterStatLeadersResponse;

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
  /** The abbreviation for the player's team. */
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

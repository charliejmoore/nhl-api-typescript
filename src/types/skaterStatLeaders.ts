import { CurrentStatLeader } from './shared';

/** Shape of data returned from `https://api-web.nhle.com/v1/skater-stats-leaders/current`. */
export interface CurrentSkaterStatLeadersResponse {
  /** List of current leaders in short handed goals. */
  goalsSh?: CurrentStatLeader[];
  /** List of current leaders in plus minus stat. */
  plusMinus?: CurrentStatLeader[];
  /** List of current leaders in assists. */
  assists?: CurrentStatLeader[];
  /** List of current leaders in power play goals. */
  goalsPp?: CurrentStatLeader[];
  /** List of current leaders in faceoff wins. */
  faceoffLeaders?: CurrentStatLeader[];
  /** List of current leaders in penalty mins. */
  penaltyMins?: CurrentStatLeader[];
  /** List of current leaders in goals. */
  goals?: CurrentStatLeader[];
  /** List of current leaders in points. */
  points?: CurrentStatLeader[];
  /** List of current leaders in time on ice. */
  toi?: CurrentStatLeader[];
}

/** Hockey statistics categories available for skater leader ranking. */
export type SkaterStatLeaderCategory = keyof CurrentSkaterStatLeadersResponse;

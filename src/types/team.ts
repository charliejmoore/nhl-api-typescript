export interface Team {
  id: number;
  franchiseId: number;
  /** Full name of the NHL team. */
  fullName: string;
  /** League identifier. Appears to be an internal field because all NHL teams have 133 for this value. */
  leagueId: number
  rawTricode: string;
  triCode: string;
}

export interface TeamListResponse {
  /** List of NHL teams (past and present). */
  data:  Team[];
  /** The number of teams returned. */
  total: number;
}

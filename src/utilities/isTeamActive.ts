import { currentTeams } from '../constants';
import { TeamTriCode } from '../types';

/**
 * Utility function that returns whether or not the given team is currently active in the NHL.
 *
 * @param {TeamTriCode} teamAbbreviation - The tricode team abbreviation (e.g., "BUF", "FLA", etc.)
 * @return {boolean}
 */
export const isTeamActive = (teamAbbreviation: TeamTriCode): boolean => {
  return currentTeams.includes(teamAbbreviation);
};

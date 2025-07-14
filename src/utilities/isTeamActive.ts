import { currentTeams } from '../constants';
import { TeamTriCode } from '../types';

export const isTeamActive = (teamAbbreviation: TeamTriCode): boolean => {
  return currentTeams.includes(teamAbbreviation);
};

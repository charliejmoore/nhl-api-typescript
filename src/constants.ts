import { TeamTriCode } from './types';

export const DEFAULT_BASE_URL_V1: string = 'https://api-web.nhle.com/v1';
export const DEFAULT_BASE_URL_STATS: string = 'https://api.nhle.com/stats/rest';

export const currentTeams: TeamTriCode[] = [
  /** Eastern */
  // Atlantic
  'TOR',
  'MTL',
  'BUF',
  'DET',
  'FLA',
  'TBL',
  'OTT',
  'BOS',

  // Metropolitan
  'NYI',
  'CBJ',
  'CAR',
  'WSH',
  'NJD',
  'NYR',
  'PHI',
  'PIT',

  /** Western */
  // Cental
  'CHI',
  'COL',
  'NSH',
  'DAL',
  'WPG',
  'UTA',
  'STL',
  'MIN',

  // Pacific
  'LAK',
  'SJS',
  'VGK',
  'EDM',
  'ANA',
  'SEA',
  'CGY',
  'VAN',
];

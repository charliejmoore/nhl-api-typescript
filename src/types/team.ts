/** Data for a single NHL team. */
export interface Team {
  /** Team unique id. */
  id: number;
  /** Franchise id. */
  franchiseId: number;
  /** Full name of the NHL team. */
  fullName: string;
  /** League identifier. Appears to be an internal field because all NHL teams have 133 for this value. */
  leagueId: number;
  /** The team's tricode. E.g., 'BOS' */
  rawTricode: TeamTriCode;
  /** The team's tricode. E.g., 'BOS' */
  triCode: TeamTriCode;
}

/** Data shape of response to `${baseUrl}/${language}/team` endpoint. */
export interface TeamListResponse {
  /** List of NHL teams (past and present). */
  data: Team[];
  /** The number of teams returned. */
  total: number;
}

/** All Tricodes for NHL teams past and present. */
export type TeamTriCode =
  /** Quebec Nordiques */
  | 'QUE'
  /** Montréal Canadiens */
  | 'MTL'
  /** Toronto St. Patricks */
  | 'TSP'
  /** Buffalo Sabres */
  | 'BUF'
  /** Oakland Seals */
  | 'OAK'
  /** Kansas City Scouts */
  | 'KCS'
  /** New York Islanders */
  | 'NYI'
  /** Ottawa Senators (1917) */
  | 'SEN'
  /** To be determined */
  | 'TBD'
  /** Atlanta Thrashers */
  | 'ATL'
  /** St. Louis Eagles */
  | 'SLE'
  /** Winnipeg Jets (1979) */
  | 'WIN'
  /** San Jose Sharks */
  | 'SJS'
  /** Quebec Bulldogs */
  | 'QBD'
  /** Columbus Blue Jackets */
  | 'CBJ'
  /** Arizona Coyotes */
  | 'ARI'
  /** Florida Panthers */
  | 'FLA'
  /** Carolina Hurricanes */
  | 'CAR'
  /** Vegas Golden Knights */
  | 'VGK'
  /** Winnipeg Jets */
  | 'WPG'
  /** Tampa Bay Lightning */
  | 'TBL'
  /** Nashville Predators */
  | 'NSH'
  /** Phoenix Coyotes */
  | 'PHX'
  /** Montreal Wanderers */
  | 'MWN'
  /** Philadelphia Quakers */
  | 'QUA'
  /** Hamilton Tigers */
  | 'HAM'
  /** Detroit Cougars */
  | 'DCG'
  /** Colorado Rockies */
  | 'CLR'
  /** Pittsburgh Pirates */
  | 'PIR'
  /** Hartford Whalers */
  | 'HFD'
  /** New Jersey Devils */
  | 'NJD'
  /** Ottawa Senators */
  | 'OTT'
  /** Colorado Avalanche */
  | 'COL'
  /** New York Americans */
  | 'NYA'
  /** Washington Capitals */
  | 'WSH'
  /** Minnesota North Stars */
  | 'MNS'
  /** Los Angeles Kings */
  | 'LAK'
  /** NHL */
  | 'NHL'
  /** Montreal Maroons */
  | 'MMR'
  /** Cleveland Barons */
  | 'CLE'
  /** Brooklyn Americans */
  | 'BRK'
  /** Detroit Falcons */
  | 'DFL'
  /** California Golden Seals */
  | 'CGS'
  /** Toronto Maple Leafs */
  | 'TOR'
  /** Edmonton Oilers */
  | 'EDM'
  /** Atlanta Flames */
  | 'AFM'
  /** Toronto Arenas */
  | 'TAN'
  /** Calgary Flames */
  | 'CGY'
  /** St. Louis Blues */
  | 'STL'
  /** Detroit Red Wings */
  | 'DET'
  /** New York Rangers */
  | 'NYR'
  /** Utah Hockey Club */
  | 'UTA'
  /** Utah Mammoth */
  | 'UTA'
  /** Anaheim Ducks */
  | 'ANA'
  /** Vancouver Canucks */
  | 'VAN'
  /** Philadelphia Flyers */
  | 'PHI'
  /** Chicago Blackhawks */
  | 'CHI'
  /** Seattle Kraken */
  | 'SEA'
  /** Pittsburgh Penguins */
  | 'PIT'
  /** Boston Bruins */
  | 'BOS'
  /** Minnesota Wild */
  | 'MIN'
  /** Dallas Stars */
  | 'DAL';

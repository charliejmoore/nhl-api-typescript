import { getAllHLTeams } from "./endpoints/teams";

export interface NHLApiClientConfig {
  baseUrl?: string;
  language?: string
}

export function createNHLApiClient(config: NHLApiClientConfig = {}) {
  return {
    getAllNHLTeams: () => getAllHLTeams(config)
    //getTeam: (id: number) => getTeam(id, config),
  };
}

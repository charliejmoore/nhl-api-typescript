import { useState, useEffect } from "react";
import {createNHLApiClient} from '../../../src/NHLApiClient'
import type { Team } from "../../../src/types/team";

const nhl = createNHLApiClient({baseUrl: '/api-nhl'});

export default function App() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    nhl.getAllNHLTeams()
      .then(response => {
        setTeams(response.data);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message || 'Unknown error');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading…</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ padding: 24 }}>
      <h1>NHL Teams</h1>
      <ul>
        {teams?.map(team => (
          <li key={team.id}>
            {team.fullName} ({team.triCode} {team.leagueId})
          </li>
        ))}
      </ul>
    </div>
  );
}

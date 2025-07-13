import fs from 'fs/promises';
import path from 'path';
import { createNHLApiClient } from '../src/NHLApiClient';
import { TeamTriCode } from '../src/types/team';

// Current teams. Other valid tricodes that are for past teams will not work.
const TEAM_TRICODES: TeamTriCode[] = [
  'MTL',
  'BUF',
  'NYI',
  'SJS',
  'CBJ',
  'FLA',
  'CAR',
  'VGK',
  'WPG',
  'TBL',
  'NSH',
  'NJD',
  'OTT',
  'COL',
  'WSH',
  'LAK',
  'TOR',
  'EDM',
  'CGY',
  'STL',
  'DET',
  'NYR',
  'UTA',
  'ANA',
  'VAN',
  'PHI',
  'CHI',
  'SEA',
  'PIT',
  'BOS',
  'MIN',
  'DAL',
];

async function main() {
  const nhl = createNHLApiClient();
  const rostersDir = path.resolve(__dirname, '../rosters');

  // Ensure the output directory exists
  await fs.mkdir(rostersDir, { recursive: true });

  for (const tricode of TEAM_TRICODES) {
    try {
      const { defensemen, forwards, goalies } =
        await nhl.getCurrentRosterForTeam(tricode);
      const roster = { defensemen, forwards, goalies };
      const filename = path.join(rostersDir, `${tricode}.json`);
      await fs.writeFile(filename, JSON.stringify(roster, null, 2), 'utf8');
      console.log(`Saved roster for ${tricode} (${tricode}) to ${filename}`);
    } catch (err) {
      console.error(`Failed for ${tricode}:`, err);
    }
  }
}

main().catch((err) => {
  console.error('Script failed:', err);
  process.exit(1);
});

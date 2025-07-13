import { createNHLApiClient } from '../src/NHLApiClient';
import { GameType } from '../src/types/shared';

async function main() {
  const nhl = createNHLApiClient({ language: 'en' });

  try {
    const { data } = await nhl.getAllNHLTeams();
    console.log('NHL Teams:');
    for (const team of data) {
      console.log(`- ${team.fullName} (${team.triCode})`);
    }
  } catch (err) {
    console.error('Failed to fetch teams:', err);
  }

  try {
    const data = await nhl.getPlayerDetails(8481542);
    console.log('Player details:', data);
  } catch (err) {
    console.error('Failed to get player details');
  }

  try {
    const data = await nhl.getPlayerGameLogBySeason(
      8477492,
      20242025,
      GameType.REGULAR_SEASON
    );
    console.log(
      'Nathan MacKinnon game log for 2024-2025 regular season:',
      data
    );
  } catch (err) {
    console.error('Failed to get game log details');
  }
}

main();

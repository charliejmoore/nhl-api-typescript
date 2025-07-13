import { createNHLApiClient } from '../src/NHLApiClient';

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
    console.error('Failed to get plater details');
  }
}

main();

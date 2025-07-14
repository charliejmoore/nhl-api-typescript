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

  try {
    const data = await nhl.getCurrentSkaterStatLeaders({
      limit: 5,
      categories: ['assists', 'goals'],
    });
    console.log('Current skater stat leaders in assists and goals:', data);
  } catch (err) {
    console.error('Failed to get stat details:', err);
  }

  try {
    const data = await nhl.getCurrentSkaterStatLeaders({
      limit: 5,
    });
    console.log('Current skater stat leaders:', data);
  } catch (err) {
    console.error('Failed to get stat details:', err);
  }
}

main();

// curl -L -X GET "https://api-web.nhle.com/v1/player/8477492/game-log/now"

// curl -L -X GET "https://api-web.nhle.com/v1/player/8481542/game-log/now"

// 8477935

// curl -L -X GET "https://api-web.nhle.com/v1/player/8475683/game-log/now"
